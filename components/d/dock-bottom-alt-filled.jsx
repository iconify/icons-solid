import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6i1a4bcn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t6i1a4bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-bottom-alt-filled"} {...others} />);
}

export default Component;
