import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh1gyn4rx.css';
import '../../css/d/dh_lsrzrh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nh1gyn4rx"/><path class="dh_lsrzrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:memory-card-20"} {...others} />);
}

export default Component;
