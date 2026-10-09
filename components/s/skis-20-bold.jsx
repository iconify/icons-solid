import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le1xlvbtb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="le1xlvbtb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:skis-20-bold"} {...others} />);
}

export default Component;
