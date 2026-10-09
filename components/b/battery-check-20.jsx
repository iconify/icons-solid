import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6b3i8cls.css';
import '../../css/x/xgcr5txor.css';
import '../../css/m/mg--uz6gi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f6b3i8cls"/><path class="xgcr5txor"/><path class="mg--uz6gi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:battery-check-20"} {...others} />);
}

export default Component;
