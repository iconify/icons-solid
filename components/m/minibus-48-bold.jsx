import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0vijabpk.css';
import '../../css/k/k6e-3tb2t.css';
import '../../css/z/z9__b873h.css';
import '../../css/y/yptyzubrq.css';
import '../../css/k/kyt-fibaq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i0vijabpk"/><path class="k6e-3tb2t"/><path class="z9__b873h"/><path class="yptyzubrq"/><path class="kyt-fibaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:minibus-48-bold"} {...others} />);
}

export default Component;
