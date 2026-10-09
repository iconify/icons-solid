import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7q9v--5u.css';
import '../../css/u/uefc_6bcp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n7q9v--5u"/><path class="uefc_6bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fish-ladder-20-bold"} {...others} />);
}

export default Component;
