import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl66i7bqg.css';
import '../../css/x/xvg_63bwk.css';
import '../../css/h/heu77aclb.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="cl66i7bqg"/><path class="xvg_63bwk"/><path class="heu77aclb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magnifier-close-bold-duotone"} {...others} />);
}

export default Component;
