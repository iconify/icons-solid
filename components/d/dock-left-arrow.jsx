import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9o3_3bkw.css';
import '../../css/w/wmzc81bdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l9o3_3bkw"/><path class="wmzc81bdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-left-arrow"} {...others} />);
}

export default Component;
