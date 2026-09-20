import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4rohbeuc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w4rohbeuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:kiss-beam-solid"} {...others} />);
}

export default Component;
