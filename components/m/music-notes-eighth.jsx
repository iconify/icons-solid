import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh1ch4dcq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zh1ch4dcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:music-notes-eighth"} {...others} />);
}

export default Component;
