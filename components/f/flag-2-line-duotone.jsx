import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/avnp3nxox.css';
import '../../css/i/i59t7buda.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="avnp3nxox"/><path class="i59t7buda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flag-2-line-duotone"} {...others} />);
}

export default Component;
