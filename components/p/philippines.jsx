import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xomdi8b2s.css';
import '../../css/n/nuemgvbfx.css';
import '../../css/c/cc6_nwbfm.css';
import '../../css/d/db4425i8s.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="xomdi8b2s"/><path class="nuemgvbfx"/><path class="cc6_nwbfm"/><path class="db4425i8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:philippines"} {...others} />);
}

export default Component;
