import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn29nlyjq.css';
import '../../css/u/uktn-1b8e.css';
import '../../css/x/xm5em6khk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tn29nlyjq"/><path class="uktn-1b8e"/><path class="xm5em6khk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:boiler-check-20"} {...others} />);
}

export default Component;
