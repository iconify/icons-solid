import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut3-glbdq.css';
import '../../css/t/tnzkiacoo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ut3-glbdq"/><path class="tnzkiacoo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-bottom-arrow"} {...others} />);
}

export default Component;
