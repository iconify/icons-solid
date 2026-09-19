import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5kv900nb.css';
import '../../css/v/vgev59bwn.css';
import '../../css/y/yso2edb_p.css';
import '../../css/z/ziil8acyu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q5kv900nb"/><g class="vgev59bwn"><path transform="matrix(.13927 0 0 .13933 -.413 .02)" class="yso2edb_p"/><path transform="matrix(.13927 0 0 .13933 -.413 .02)" class="ziil8acyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:yarn-lock"} {...others} />);
}

export default Component;
