import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf2-8lbjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yf2-8lbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:apple-logo-round"} {...others} />);
}

export default Component;
