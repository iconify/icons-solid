import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4zamhbtf.css';
import '../../css/g/gn5hjtb_w.css';
import '../../css/z/zqal-355k.css';
import '../../css/f/fmtn9zbqu.css';
import '../../css/v/vvgxfyurl.css';
import '../../css/t/tp4ce4bri.css';
import '../../css/p/pg6ecxb7c.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="x4zamhbtf"/><path class="gn5hjtb_w"/><path class="zqal-355k"/><path class="fmtn9zbqu"/><path class="vvgxfyurl"/><path class="tp4ce4bri"/><path class="pg6ecxb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cracking-face"} {...others} />);
}

export default Component;
