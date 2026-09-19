import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3uo1db8t.css';
import '../../css/w/wmzc81bdm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z3uo1db8t"/><path class="wmzc81bdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-left-arrow-filled"} {...others} />);
}

export default Component;
