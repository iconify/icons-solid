import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mgtbeeqcp.css';
import '../../css/h/herht5b_c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mgtbeeqcp"/><path class="herht5b_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:book-20-bold"} {...others} />);
}

export default Component;
