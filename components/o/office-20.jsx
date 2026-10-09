import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe80ngmuz.css';
import '../../css/a/a0sj_5bhv.css';
import '../../css/r/r_d2c4b7s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pe80ngmuz"/><path class="a0sj_5bhv"/><path class="r_d2c4b7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:office-20"} {...others} />);
}

export default Component;
