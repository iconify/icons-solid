import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tcebbxirw.css';
import '../../css/m/m374-eb6o.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="tcebbxirw"/><path class="m374-eb6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:paypal-original"} {...others} />);
}

export default Component;
