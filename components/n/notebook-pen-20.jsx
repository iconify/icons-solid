import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vq6yi9hgq.css';
import '../../css/i/icz8l1jmc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vq6yi9hgq"/><path class="icz8l1jmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:notebook-pen-20"} {...others} />);
}

export default Component;
