import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q2511yb0m.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="q2511yb0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:gamepad-up-right"} {...others} />);
}

export default Component;
