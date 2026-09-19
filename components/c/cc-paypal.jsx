import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xjd_3-boj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xjd_3-boj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:cc-paypal"} {...others} />);
}

export default Component;
