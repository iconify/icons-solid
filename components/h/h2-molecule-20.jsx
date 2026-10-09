import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_xehnt6f.css';
import '../../css/z/zrbhk7b_w.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i_xehnt6f"/><path class="zrbhk7b_w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:h2-molecule-20"} {...others} />);
}

export default Component;
