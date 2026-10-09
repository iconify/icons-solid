import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuo0z1gmg.css';
import '../../css/h/hk7ioiexi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cuo0z1gmg"/><path class="hk7ioiexi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:glasses-20-bold"} {...others} />);
}

export default Component;
