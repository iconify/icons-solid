import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vdk6ubcvg.css';
import '../../css/k/kdupjtxcu.css';
import '../../css/y/yxss69ubf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vdk6ubcvg"/><path class="kdupjtxcu"/><path class="yxss69ubf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:gesture-double-tap"} {...others} />);
}

export default Component;
