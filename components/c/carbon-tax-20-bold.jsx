import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iua8clh6p.css';
import '../../css/d/d8lollj3h.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="iua8clh6p"/><path class="d8lollj3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-tax-20-bold"} {...others} />);
}

export default Component;
