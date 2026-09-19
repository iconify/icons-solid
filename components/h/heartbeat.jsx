import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/esle7_bpk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="esle7_bpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:heartbeat"} {...others} />);
}

export default Component;
