import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjz7p6x4j.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="tjz7p6x4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:couple-20"} {...others} />);
}

export default Component;
