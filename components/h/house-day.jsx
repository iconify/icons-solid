import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvfmnjb6v.css';
import '../../css/h/h1y4n0biy.css';
import '../../css/p/pxr9mrjbf.css';
import '../../css/p/p4tnt3xxj.css';
import '../../css/u/uckmj9w8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xvfmnjb6v"/><path class="h1y4n0biy"/><path class="pxr9mrjbf"/><circle class="p4tnt3xxj"/><circle class="uckmj9w8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-day"} {...others} />);
}

export default Component;
