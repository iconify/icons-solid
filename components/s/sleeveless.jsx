import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l59r7vq1m.css';
import '../../css/k/ky3hlkj1j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="l59r7vq1m"/><path class="ky3hlkj1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sleeveless"} {...others} />);
}

export default Component;
