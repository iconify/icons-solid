import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctf7tpbxx.css';
import '../../css/i/i_23a8b0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ctf7tpbxx"/><path class="i_23a8b0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:alt-arrow-left-bold-duotone"} {...others} />);
}

export default Component;
