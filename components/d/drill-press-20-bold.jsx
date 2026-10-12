import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v19yd0bwi.css';
import '../../css/k/khpnrke8g.css';
import '../../css/k/kz95gib1r.css';
import '../../css/d/dsqatabik.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="v19yd0bwi"/><path class="khpnrke8g"/><path class="kz95gib1r"/><path class="dsqatabik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:drill-press-20-bold"} {...others} />);
}

export default Component;
