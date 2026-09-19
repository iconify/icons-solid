import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbhv8bbfx.css';
import '../../css/z/z_pgce4lp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbhv8bbfx"/><path class="z_pgce4lp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-left-stroke-circle-filled"} {...others} />);
}

export default Component;
