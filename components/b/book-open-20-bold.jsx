import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwodvgbiu.css';
import '../../css/i/ip3sjpwvs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qwodvgbiu"/><path class="ip3sjpwvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:book-open-20-bold"} {...others} />);
}

export default Component;
