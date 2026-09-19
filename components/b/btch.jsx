import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gjm4824mc.css';
import '../../css/m/md286fbip.css';
import '../../css/i/ij7fy157e.css';
import '../../css/m/mv110rcjt.css';
import '../../css/i/i3xpon6oj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="gjm4824mc"/><g class="md286fbip"><path class="ij7fy157e"/><path class="mv110rcjt"/><path class="i3xpon6oj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:btch"} {...others} />);
}

export default Component;
