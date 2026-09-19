import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rs-7s_ltd.css';
import '../../css/s/si5fuubuq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rs-7s_ltd"/><path class="si5fuubuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:simcard-dual"} {...others} />);
}

export default Component;
