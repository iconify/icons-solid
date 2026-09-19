import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trhm6wb1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trhm6wb1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dialpad-filled"} {...others} />);
}

export default Component;
