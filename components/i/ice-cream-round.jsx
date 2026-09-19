import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ek81er-1d.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ek81er-1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:ice-cream-round"} {...others} />);
}

export default Component;
