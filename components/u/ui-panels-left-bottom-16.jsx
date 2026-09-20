import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt7nfbcvj.css';
import '../../css/n/n00h-vihv.css';
import '../../css/z/zvjeae8vn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jt7nfbcvj"/><path class="n00h-vihv"/><path clip-rule="evenodd" class="zvjeae8vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:ui-panels-left-bottom-16"} {...others} />);
}

export default Component;
