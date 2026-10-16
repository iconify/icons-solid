import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jg12-u1eb.css';
import '../../css/t/tzz4r4bub.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jg12-u1eb"/><path class="tzz4r4bub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-moon-rain-20-bold"} {...others} />);
}

export default Component;
