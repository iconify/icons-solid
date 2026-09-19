import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f80hj5bpp.css';

const viewBox = {"width":17,"height":16};
const content = `<path class="f80hj5bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cloud-sun"} {...others} />);
}

export default Component;
