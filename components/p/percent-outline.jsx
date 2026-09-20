import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hq8y7_swj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hq8y7_swj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:percent-outline"} {...others} />);
}

export default Component;
