import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/ql6c7ubyx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ql6c7ubyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:desktop-filled"} {...others} />);
}

export default Component;
