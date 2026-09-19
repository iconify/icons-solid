import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/niijr9bav.css';
import '../../css/p/pv8augtve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="niijr9bav"/><path class="pv8augtve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:food-menu"} {...others} />);
}

export default Component;
