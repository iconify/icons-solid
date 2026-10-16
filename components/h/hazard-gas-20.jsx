import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6_s1zkbf.css';
import '../../css/j/jgob_eb-m.css';
import '../../css/o/oonsc9nwe.css';
import '../../css/d/dijq8qbns.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="e6_s1zkbf"/><path class="jgob_eb-m"/><path class="oonsc9nwe"/><path class="dijq8qbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hazard-gas-20"} {...others} />);
}

export default Component;
