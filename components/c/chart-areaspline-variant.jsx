import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx2k6dbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bx2k6dbxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:chart-areaspline-variant"} {...others} />);
}

export default Component;
