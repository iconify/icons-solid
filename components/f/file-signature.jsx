import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz9exbb3k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uz9exbb3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:file-signature"} {...others} />);
}

export default Component;
