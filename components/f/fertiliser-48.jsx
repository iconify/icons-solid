import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jy_n96oom.css';
import '../../css/t/tq3jfobxa.css';
import '../../css/e/e58540bzj.css';
import '../../css/w/w3ursc5fy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jy_n96oom"/><path class="tq3jfobxa"/><path class="e58540bzj"/><path class="w3ursc5fy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fertiliser-48"} {...others} />);
}

export default Component;
