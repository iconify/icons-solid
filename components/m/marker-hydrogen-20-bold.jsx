import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hei8_htdz.css';
import '../../css/w/wtq6wobvy.css';
import '../../css/g/g5a07ectm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hei8_htdz"/><path class="wtq6wobvy"/><path class="g5a07ectm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:marker-hydrogen-20-bold"} {...others} />);
}

export default Component;
