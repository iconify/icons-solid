import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e00fw2bit.css';
import '../../css/v/vz-n1gf_b.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><path id="SVG0BHc9coD" class="e00fw2bit"/></defs><use href="#SVG0BHc9coD"/><path class="vz-n1gf_b"/><use href="#SVG0BHc9coD"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:phone-portrait"} {...others} />);
}

export default Component;
