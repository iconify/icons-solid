import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cszoybbgj.css';
import '../../css/x/xaknxzbmx.css';
import '../../css/m/m07y7fbsy.css';
import '../../css/d/dp4gjjb8w.css';
import '../../css/h/h-htocc-k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cszoybbgj"/><path class="xaknxzbmx"/><path class="m07y7fbsy"/><path class="dp4gjjb8w"/><path class="h-htocc-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-plugged-20-bold"} {...others} />);
}

export default Component;
