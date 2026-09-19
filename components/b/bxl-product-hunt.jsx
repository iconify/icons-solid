import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xi2jq6bjc.css';
import '../../css/m/mz86u9bpz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xi2jq6bjc"/><path class="mz86u9bpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-product-hunt"} {...others} />);
}

export default Component;
