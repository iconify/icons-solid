import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgbxvebvj.css';
import '../../css/t/tipy9tb0h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mgbxvebvj"/><path class="tipy9tb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:electric-boiler-20-bold"} {...others} />);
}

export default Component;
