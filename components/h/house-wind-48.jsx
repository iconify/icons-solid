import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9czz4bal.css';
import '../../css/r/rp1d5db3h.css';
import '../../css/i/i52_220ta.css';
import '../../css/v/v2k62zbwy.css';
import '../../css/g/g-7opobiv.css';
import '../../css/b/baqkv1bgy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d9czz4bal"/><path class="rp1d5db3h"/><path class="i52_220ta"/><path class="v2k62zbwy"/><path class="g-7opobiv"/><path class="baqkv1bgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-wind-48"} {...others} />);
}

export default Component;
