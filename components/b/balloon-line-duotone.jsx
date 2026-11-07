import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sxio5cbij.css';
import '../../css/a/a0ykk1jag.css';
import '../../css/z/z9r7w0b0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sxio5cbij"/><path class="a0ykk1jag"/><path class="z9r7w0b0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:balloon-line-duotone"} {...others} />);
}

export default Component;
