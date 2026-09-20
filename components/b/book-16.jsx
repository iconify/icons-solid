import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcy60_bxj.css';
import '../../css/d/dw8a25bsl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rcy60_bxj"/><path clip-rule="evenodd" class="dw8a25bsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:book-16"} {...others} />);
}

export default Component;
