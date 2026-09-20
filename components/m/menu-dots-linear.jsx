import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v0dnq2b7o.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/g/gradl1bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="v0dnq2b7o"/><circle class="h_tsn8bxt"/><circle class="gradl1bjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:menu-dots-linear"} {...others} />);
}

export default Component;
