import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ol5lzubpu.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="ol5lzubpu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:x-circle-multiple-bold"} {...others} />);
}

export default Component;
