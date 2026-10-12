import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv8044bua.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iv8044bua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:eraser-stroke-20"} {...others} />);
}

export default Component;
