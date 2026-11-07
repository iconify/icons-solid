import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln1f_4blw.css';
import '../../css/u/u8s4_onzx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ln1f_4blw"/><path class="u8s4_onzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-bold-duotone"} {...others} />);
}

export default Component;
