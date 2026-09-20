import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ik_7hmbnr.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="ik_7hmbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:chart-style4"} {...others} />);
}

export default Component;
