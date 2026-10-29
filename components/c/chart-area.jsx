import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z22a7qbic.css';
import '../../css/d/dpjj_cbbf.css';
import '../../css/l/lhks2kb_g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a z22a7qbic"/><path class="dpjj_cbbf wm-k"/><path class="lhks2kb_g wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:chart-area"} {...others} />);
}

export default Component;
