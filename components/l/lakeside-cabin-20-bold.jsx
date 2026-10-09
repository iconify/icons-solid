import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rryjfac1g.css';
import '../../css/y/y8is0jr3c.css';
import '../../css/j/jerqv_bif.css';
import '../../css/w/wj58zybzn.css';
import '../../css/w/wq-p5sbsc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rryjfac1g"/><path class="y8is0jr3c"/><path class="jerqv_bif"/><path class="wj58zybzn"/><path class="wq-p5sbsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:lakeside-cabin-20-bold"} {...others} />);
}

export default Component;
