import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jitys6bhk.css';
import '../../css/d/duz8iobvw.css';
import '../../css/v/vbamuvwfj.css';
import '../../css/s/sa1gfwbrq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jitys6bhk"/><path class="duz8iobvw"/><path class="vbamuvwfj"/><path class="sa1gfwbrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-irradiance-20"} {...others} />);
}

export default Component;
