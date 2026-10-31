import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q6fla5ihq.css';
import '../../css/w/wc3ev5p3f.css';
import '../../css/k/k6f9ajnvk.css';
import '../../css/f/fy2k2g21h.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="q6fla5ihq"/><path class="wc3ev5p3f"/><path class="k6f9ajnvk"/><path class="fy2k2g21h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:djibouti"} {...others} />);
}

export default Component;
