import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_xcypzrr.css';
import '../../css/t/t0x6_jbcw.css';
import '../../css/j/jds09nhnk.css';
import '../../css/b/bw5b8wbzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k z_xcypzrr"/><path class="t0x6_jbcw wm-k"/><path class="jds09nhnk wm-a"/><path class="bw5b8wbzu wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:building"} {...others} />);
}

export default Component;
