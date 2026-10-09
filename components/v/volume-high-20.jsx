import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fmzaum9qs.css';
import '../../css/p/pefb_hibq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fmzaum9qs"/><path class="pefb_hibq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:volume-high-20"} {...others} />);
}

export default Component;
