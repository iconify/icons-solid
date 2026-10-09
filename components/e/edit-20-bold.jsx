import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fsr_drbgn.css';
import '../../css/p/pfaueebia.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="fsr_drbgn"/><path class="pfaueebia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:edit-20-bold"} {...others} />);
}

export default Component;
