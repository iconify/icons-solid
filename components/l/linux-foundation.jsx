import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uo8h1vk8m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="uo8h1vk8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:linux-foundation"} {...others} />);
}

export default Component;
