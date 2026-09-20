import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ff__zcblq.css';
import '../../css/q/qsplvob1b.css';

const viewBox = {"width":208,"height":128};
const content = `<path class="ff__zcblq"/><path class="qsplvob1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:markdown-dark"} {...others} />);
}

export default Component;
