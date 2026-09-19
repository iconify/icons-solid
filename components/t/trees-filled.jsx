import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1otxkt3x.css';
import '../../css/y/yic1v-1qv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1otxkt3x"/><path class="yic1v-1qv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:trees-filled"} {...others} />);
}

export default Component;
