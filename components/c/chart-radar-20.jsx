import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjyhlk1_l.css';
import '../../css/z/zr5giubst.css';
import '../../css/t/tonaopb8e.css';
import '../../css/m/manbawboy.css';
import '../../css/m/m61f7sbux.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gjyhlk1_l"/><path class="zr5giubst"/><path class="tonaopb8e"/><path class="manbawboy"/><path class="m61f7sbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-radar-20"} {...others} />);
}

export default Component;
