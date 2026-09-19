import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5yf1eshv.css';
import '../../css/t/toc-9jzis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l5yf1eshv"/><path class="toc-9jzis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-cloud-light-rain"} {...others} />);
}

export default Component;
