import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxh9rydyd.css';
import '../../css/a/aexs-bb9t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kxh9rydyd"/><path class="aexs-bb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sailboat-20-bold"} {...others} />);
}

export default Component;
