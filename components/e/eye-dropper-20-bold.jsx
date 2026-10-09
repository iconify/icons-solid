import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m1hov4txr.css';
import '../../css/o/o_hufdbvo.css';
import '../../css/u/ujk3pta6a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m1hov4txr"/><path class="o_hufdbvo"/><path class="ujk3pta6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-dropper-20-bold"} {...others} />);
}

export default Component;
