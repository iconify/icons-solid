import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pso7n1cmc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pso7n1cmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:rust-outline"} {...others} />);
}

export default Component;
