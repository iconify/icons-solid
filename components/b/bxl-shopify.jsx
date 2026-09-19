import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob8f3hzgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ob8f3hzgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-shopify"} {...others} />);
}

export default Component;
