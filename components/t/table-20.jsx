import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wetq5b_1u.css';
import '../../css/d/d1j6p8b_k.css';
import '../../css/q/qqk1d6grf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wetq5b_1u"/><path class="d1j6p8b_k"/><path class="qqk1d6grf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:table-20"} {...others} />);
}

export default Component;
