import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbr1c2bcx.css';
import '../../css/b/b-mh2-9jf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hbr1c2bcx"/><path class="b-mh2-9jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eraser-20-bold"} {...others} />);
}

export default Component;
