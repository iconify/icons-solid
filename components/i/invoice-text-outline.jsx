import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr1o9hbfi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zr1o9hbfi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:invoice-text-outline"} {...others} />);
}

export default Component;
