import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p643z7b_h.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="p643z7b_h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:jackhammer"} {...others} />);
}

export default Component;
