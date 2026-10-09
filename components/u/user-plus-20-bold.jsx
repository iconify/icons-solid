import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/algwq4ehk.css';
import '../../css/l/ll6ph0b-z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="algwq4ehk"/><path class="ll6ph0b-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:user-plus-20-bold"} {...others} />);
}

export default Component;
