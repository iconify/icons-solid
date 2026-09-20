import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zizo1ybwg.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="zizo1ybwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:double-quote-serif-left"} {...others} />);
}

export default Component;
