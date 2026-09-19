import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtu_2e0sq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtu_2e0sq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-left-alt-filled"} {...others} />);
}

export default Component;
