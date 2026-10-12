import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cifz9-27c.css';
import '../../css/w/w1o4mgb4h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cifz9-27c"/><path class="w1o4mgb4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:frog-48"} {...others} />);
}

export default Component;
