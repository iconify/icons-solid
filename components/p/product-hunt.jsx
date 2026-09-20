import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kql4cwbwx.css';
import '../../css/t/td28wmbob.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kql4cwbwx"/><path class="td28wmbob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:product-hunt"} {...others} />);
}

export default Component;
