import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/ez3g9wb-c.css';
import '../../css/c/ciumeibhn.css';
import '../../css/u/u5m8n7-ni.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ez3g9wb-c"/><path class="ciumeibhn"/><path class="u5m8n7-ni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cards-01"} {...others} />);
}

export default Component;
