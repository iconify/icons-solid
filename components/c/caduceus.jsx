import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r4f-rbb3p.css';
import '../../css/o/or62bbc5c.css';
import '../../css/u/ufz0b2bzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="r4f-rbb3p"/><path class="or62bbc5c"/><path class="ufz0b2bzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:caduceus"} {...others} />);
}

export default Component;
