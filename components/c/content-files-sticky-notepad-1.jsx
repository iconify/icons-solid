import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi01iacmk.css';
import '../../css/r/rghyt8iyb.css';
import '../../css/z/zqb02xggr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bi01iacmk"/><path class="rghyt8iyb"/><path class="zqb02xggr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-sticky-notepad-1"} {...others} />);
}

export default Component;
