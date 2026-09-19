import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdri3bpee.css';
import '../../css/m/mf-tslbjc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="pdri3bpee"/><path class="mf-tslbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:carbon-for-ibm-product"} {...others} />);
}

export default Component;
