import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wo2_hufaw.css';
import '../../css/k/k4x3-0b4z.css';
import '../../css/f/f2fykithr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wo2_hufaw"/><path class="k4x3-0b4z"/><path class="f2fykithr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plant-20"} {...others} />);
}

export default Component;
