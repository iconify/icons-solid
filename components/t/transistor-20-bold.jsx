import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o6lsc2brm.css';
import '../../css/u/uykl-2-4c.css';
import '../../css/m/mlich4fig.css';
import '../../css/n/ntp17abmb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o6lsc2brm"/><path class="uykl-2-4c"/><path class="mlich4fig"/><path class="ntp17abmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transistor-20-bold"} {...others} />);
}

export default Component;
