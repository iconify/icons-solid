import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvkhpwbij.css';

const viewBox = {"width":220.61,"height":173.65};
const content = `<path class="pvkhpwbij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:karmada-dark"} {...others} />);
}

export default Component;
