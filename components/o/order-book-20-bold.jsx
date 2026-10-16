import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4m5opfgf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="m4m5opfgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:order-book-20-bold"} {...others} />);
}

export default Component;
