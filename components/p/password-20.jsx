import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha7298_1d.css';
import '../../css/w/wieaolbut.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ha7298_1d"/><path class="wieaolbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:password-20"} {...others} />);
}

export default Component;
