import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c65-ehvfy.css';
import '../../css/s/s5l58c2dr.css';
import '../../css/d/d0had8aoi.css';
import '../../css/z/z1c3c8wmj.css';
import '../../css/m/mn2t0b19e.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="c65-ehvfy"/><path class="s5l58c2dr"/><path class="d0had8aoi"/><path class="z1c3c8wmj"/><path class="mn2t0b19e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-bar-stacked-48"} {...others} />);
}

export default Component;
