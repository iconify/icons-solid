import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkrrj1btb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qkrrj1btb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:currency-dollar"} {...others} />);
}

export default Component;
