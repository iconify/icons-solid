import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq6nfxbav.css';
import '../../css/e/eyqb_0bcs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kq6nfxbav"/><path class="eyqb_0bcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:radiator-20"} {...others} />);
}

export default Component;
