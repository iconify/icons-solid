import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mq9r4qbvg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mq9r4qbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:ebay"} {...others} />);
}

export default Component;
