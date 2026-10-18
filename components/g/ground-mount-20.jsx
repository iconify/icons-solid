import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2aljf7ie.css';
import '../../css/m/mxxm6-awx.css';
import '../../css/u/uk8t_bc8m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="o2aljf7ie"/><path class="mxxm6-awx"/><path class="uk8t_bc8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-mount-20"} {...others} />);
}

export default Component;
