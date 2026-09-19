import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1_h_fbus.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p1_h_fbus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-app-connect-enterprise"} {...others} />);
}

export default Component;
