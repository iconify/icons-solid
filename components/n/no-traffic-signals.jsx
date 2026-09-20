import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0s7smh9s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q0s7smh9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:no-traffic-signals"} {...others} />);
}

export default Component;
