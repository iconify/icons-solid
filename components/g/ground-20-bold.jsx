import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0ezl7eqf.css';
import '../../css/m/mgkn3accm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i0ezl7eqf"/><path class="mgkn3accm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-20-bold"} {...others} />);
}

export default Component;
