import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg84oub9d.css';
import '../../css/u/udvwo6blt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="mg84oub9d"/><path clip-rule="evenodd" class="udvwo6blt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:anja-solid"} {...others} />);
}

export default Component;
