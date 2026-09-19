import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/p/pvvsmq5js.css';
import '../../css/n/nex3mxn9k.css';
import '../../css/a/aeo40rpjp.css';
import '../../css/r/rzh9w33nj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="pvvsmq5js"/><g class="nex3mxn9k"><path class="aeo40rpjp"/><circle class="rzh9w33nj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-circle-ci-open"} {...others} />);
}

export default Component;
