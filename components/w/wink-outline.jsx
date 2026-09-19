import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vb5cdwbma.css';
import '../../css/w/wvxwsc-vy.css';
import '../../css/z/zx3pkcc9n.css';
import '../../css/z/zt1e34j_a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vb5cdwbma"/><path clip-rule="evenodd" class="wvxwsc-vy"/><path class="zx3pkcc9n"/><path clip-rule="evenodd" class="zt1e34j_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wink-outline"} {...others} />);
}

export default Component;
