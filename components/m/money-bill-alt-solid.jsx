import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/px5xjv6ok.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="px5xjv6ok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:money-bill-alt-solid"} {...others} />);
}

export default Component;
