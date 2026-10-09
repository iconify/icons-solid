import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zu82nqowe.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zu82nqowe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rare-earth-20-bold"} {...others} />);
}

export default Component;
