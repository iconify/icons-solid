import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u0r4_lj8o.css';
import '../../css/i/its440yfc.css';
import '../../css/u/ujgww1per.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="u0r4_lj8o"/><path class="its440yfc"/><path class="ujgww1per"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:loader-line-duotone"} {...others} />);
}

export default Component;
