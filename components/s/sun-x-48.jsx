import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrpvxrlxf.css';
import '../../css/t/t8dqc66mp.css';
import '../../css/p/pwmnyqitk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vrpvxrlxf"/><path class="t8dqc66mp"/><path class="pwmnyqitk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-x-48"} {...others} />);
}

export default Component;
