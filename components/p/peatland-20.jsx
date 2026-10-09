import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wlihmg_5w.css';
import '../../css/d/d15p_kz0v.css';
import '../../css/q/qsfdg6bcv.css';
import '../../css/z/z_5a29b5k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wlihmg_5w"/><path class="d15p_kz0v"/><path class="qsfdg6bcv"/><path class="z_5a29b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:peatland-20"} {...others} />);
}

export default Component;
