import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pt0-ruido.css';
import '../../css/b/b8usfzbqp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pt0-ruido"/><path class="b8usfzbqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-20-bold"} {...others} />);
}

export default Component;
