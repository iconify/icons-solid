import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2q0x1bgc.css';
import '../../css/m/mw0gdnbgu.css';
import '../../css/e/eg_awvb4a.css';

const viewBox = {"width":360,"height":360};
const content = `<path class="z2q0x1bgc"/><path class="mw0gdnbgu"/><path class="eg_awvb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:contour"} {...others} />);
}

export default Component;
