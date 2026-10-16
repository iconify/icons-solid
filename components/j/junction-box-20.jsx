import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p9a328d8s.css';
import '../../css/t/thuizfb_t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p9a328d8s"/><path class="thuizfb_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:junction-box-20"} {...others} />);
}

export default Component;
