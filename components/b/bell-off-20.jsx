import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7lbhgb_q.css';
import '../../css/i/iffp3wblr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u7lbhgb_q"/><path class="iffp3wblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bell-off-20"} {...others} />);
}

export default Component;
