import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvufwdbic.css';
import '../../css/r/r_u1-tb8p.css';
import '../../css/h/h8ej8rbod.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kvufwdbic"/><path class="r_u1-tb8p"/><path class="h8ej8rbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cctv-20"} {...others} />);
}

export default Component;
