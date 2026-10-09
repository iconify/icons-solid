import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q65t7t7ey.css';
import '../../css/i/iff33zhfm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q65t7t7ey"/><path class="iff33zhfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rotate-ccw-20-bold"} {...others} />);
}

export default Component;
