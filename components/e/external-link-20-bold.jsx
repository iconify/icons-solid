import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkira4mse.css';
import '../../css/d/d8zayxbdq.css';
import '../../css/q/q9gdl6bex.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="lkira4mse"/><path class="d8zayxbdq"/><path class="q9gdl6bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:external-link-20-bold"} {...others} />);
}

export default Component;
