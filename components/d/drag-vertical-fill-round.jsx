import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o77se9lzf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o77se9lzf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:drag-vertical-fill-round"} {...others} />);
}

export default Component;
