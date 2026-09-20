import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cmvazjgux.css';
import '../../css/t/t6vi4ublf.css';
import '../../css/l/lz7dz2q5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="cmvazjgux"/><path class="t6vi4ublf"/><path class="lz7dz2q5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-down-minimlistic-broken"} {...others} />);
}

export default Component;
