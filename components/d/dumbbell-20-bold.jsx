import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u56_ywbll.css';
import '../../css/a/ahi5vcc6u.css';
import '../../css/f/fxlzn8gcb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u56_ywbll"/><path class="ahi5vcc6u"/><path class="fxlzn8gcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dumbbell-20-bold"} {...others} />);
}

export default Component;
