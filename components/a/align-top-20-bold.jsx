import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_320w4ee.css';
import '../../css/e/ec0kd2kjb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u_320w4ee"/><path class="ec0kd2kjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:align-top-20-bold"} {...others} />);
}

export default Component;
