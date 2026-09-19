import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyjklpbqy.css';
import '../../css/t/t_y32l19z.css';
import '../../css/t/tb62sjbsx.css';
import '../../css/m/mf4zhw8on.css';
import '../../css/d/dcil5bbwz.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="eyjklpbqy"/><path class="t_y32l19z"/><rect class="tb62sjbsx"/><rect class="mf4zhw8on"/><path class="dcil5bbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:library-outline"} {...others} />);
}

export default Component;
