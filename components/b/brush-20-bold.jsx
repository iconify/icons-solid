import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvp9p07ws.css';
import '../../css/n/n3lls7b5k.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rvp9p07ws"/><path class="n3lls7b5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:brush-20-bold"} {...others} />);
}

export default Component;
