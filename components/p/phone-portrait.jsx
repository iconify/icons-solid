import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e00fw2bit.css';
import '../../css/v/vz-n1gf_b.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><path id="SVGpHmZZbqf" class="e00fw2bit"/></defs><use href="#SVGpHmZZbqf"/><path class="vz-n1gf_b"/><use href="#SVGpHmZZbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:phone-portrait"} {...others} />);
}

export default Component;
