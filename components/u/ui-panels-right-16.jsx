import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt2cd8lqq.css';
import '../../css/f/fohnvn4zr.css';
import '../../css/z/zvjeae8vn.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lt2cd8lqq"/><path class="fohnvn4zr"/><path clip-rule="evenodd" class="zvjeae8vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:ui-panels-right-16"} {...others} />);
}

export default Component;
