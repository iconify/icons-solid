import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eagfqob-p.css';
import '../../css/h/hx_d8fz_e.css';
import '../../css/c/cbwvap00w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eagfqob-p"/><path class="hx_d8fz_e"/><path class="cbwvap00w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-cell-20"} {...others} />);
}

export default Component;
