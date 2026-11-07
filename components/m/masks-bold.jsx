import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0e1_pbyx.css';
import '../../css/a/a7x3g_3uk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t0e1_pbyx"/><path clip-rule="evenodd" class="a7x3g_3uk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:masks-bold"} {...others} />);
}

export default Component;
