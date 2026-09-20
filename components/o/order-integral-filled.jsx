import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3l75_b1y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="d3l75_b1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:order-integral-filled"} {...others} />);
}

export default Component;
