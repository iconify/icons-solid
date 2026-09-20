import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpny1ho_k.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qpny1ho_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:arrow-up"} {...others} />);
}

export default Component;
