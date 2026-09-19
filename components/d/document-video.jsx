import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wpt8g1b7z.css';
import '../../css/n/nketkfbkv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wpt8g1b7z"/><path class="nketkfbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:document-video"} {...others} />);
}

export default Component;
