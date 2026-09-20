import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n0_shybnl.css';
import '../../css/v/vwwyiacly.css';
import '../../css/u/urwe8bb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n0_shybnl"/><path class="vwwyiacly"/><path class="urwe8bb9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:close-broken"} {...others} />);
}

export default Component;
