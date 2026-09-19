import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pvvsmq5js.css';
import '../../css/o/o1k8wcbly.css';
import '../../css/d/d6up25bex.css';
import '../../css/z/ziil8acyu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="pvvsmq5js"/><g class="o1k8wcbly"><path transform="matrix(.09189 0 0 .09115 6.896 6.683)" class="d6up25bex"/><path transform="matrix(.09189 0 0 .09115 6.896 6.683)" class="ziil8acyu"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-yarn-open"} {...others} />);
}

export default Component;
