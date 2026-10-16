import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt5h_1qtq.css';
import '../../css/f/fn8d5vbzf.css';
import '../../css/b/b2th62z3s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bt5h_1qtq"/><path class="fn8d5vbzf"/><path class="b2th62z3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-extinguisher-20"} {...others} />);
}

export default Component;
