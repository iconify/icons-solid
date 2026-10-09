import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miccwacuq.css';
import '../../css/z/z0q4lw36b.css';
import '../../css/f/f8wc0fbln.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="miccwacuq"/><path class="z0q4lw36b"/><path class="f8wc0fbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:van-20"} {...others} />);
}

export default Component;
