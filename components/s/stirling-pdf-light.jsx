import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmrg6hbwc.css';
import '../../css/u/u8nonlcqn.css';
import '../../css/p/pvcco7a8u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lmrg6hbwc"/><path class="u8nonlcqn"/><path class="pvcco7a8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:stirling-pdf-light"} {...others} />);
}

export default Component;
