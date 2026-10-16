import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m3zawtbgl.css';
import '../../css/v/vvsj8nuvg.css';
import '../../css/c/cg6-adcsl.css';
import '../../css/z/zzce84blf.css';
import '../../css/v/vjpczricd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m3zawtbgl"/><path class="vvsj8nuvg"/><path class="cg6-adcsl"/><path class="zzce84blf"/><path class="vjpczricd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ch4-molecule-20-bold"} {...others} />);
}

export default Component;
