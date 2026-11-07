import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6eyaewnx.css';
import '../../css/c/cr0ueab8d.css';
import '../../css/e/esa97-7_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j6eyaewnx"/><path class="cr0ueab8d"/><path class="esa97-7_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-speaker-bold"} {...others} />);
}

export default Component;
