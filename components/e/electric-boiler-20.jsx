import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlg1icbmr.css';
import '../../css/r/res8m0bwa.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xlg1icbmr"/><path class="res8m0bwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-boiler-20"} {...others} />);
}

export default Component;
