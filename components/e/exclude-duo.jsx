import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t446ypbya.css';
import '../../css/r/rso6jlb3w.css';
import '../../css/f/fslmcjxus.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="t446ypbya"/><path class="rso6jlb3w"/><path class="fslmcjxus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:exclude-duo"} {...others} />);
}

export default Component;
