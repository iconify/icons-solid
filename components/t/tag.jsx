import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqxr6w9-j.css';
import '../../css/f/fdwp2r2iv.css';
import '../../css/t/t9rkx8a4l.css';
import '../../css/q/qqbxrmqpy.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="vqxr6w9-j"><path clip-rule="evenodd" class="fdwp2r2iv"/><path class="t9rkx8a4l"/><path class="qqbxrmqpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tag"} {...others} />);
}

export default Component;
