import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrsrqfkrg.css';
import '../../css/l/lw_rdhb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mrsrqfkrg"/><path class="lw_rdhb3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:alarm-alt-filled"} {...others} />);
}

export default Component;
