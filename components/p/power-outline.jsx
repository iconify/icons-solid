import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8si1w29y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z8si1w29y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:power-outline"} {...others} />);
}

export default Component;
