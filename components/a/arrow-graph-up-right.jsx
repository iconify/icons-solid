import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdldcwb6i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hdldcwb6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:arrow-graph-up-right"} {...others} />);
}

export default Component;
