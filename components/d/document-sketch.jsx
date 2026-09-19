import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl4tf0b_w.css';
import '../../css/u/u9olyabjd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tl4tf0b_w"/><path class="u9olyabjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-sketch"} {...others} />);
}

export default Component;
