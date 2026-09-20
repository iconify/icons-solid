import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l05o_pbdf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l05o_pbdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:cc-amex"} {...others} />);
}

export default Component;
