import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehrkbd6tc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ehrkbd6tc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:chart-curve-stepped"} {...others} />);
}

export default Component;
