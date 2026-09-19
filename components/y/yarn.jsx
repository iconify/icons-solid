import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p5hj_1brq.css';
import '../../css/d/d6up25bex.css';
import '../../css/z/ziil8acyu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="p5hj_1brq"><path transform="matrix(.1608 0 0 .16076 -.053 -.054)" class="d6up25bex"/><path transform="matrix(.1608 0 0 .16076 -.053 -.054)" class="ziil8acyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:yarn"} {...others} />);
}

export default Component;
