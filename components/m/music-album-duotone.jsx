import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqfh5ojmb.css';
import '../../css/h/hsv1gfhcq.css';
import '../../css/z/z4cigfbsf.css';
import '../../css/x/xrnmq47gl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="qqfh5ojmb"/><circle class="hsv1gfhcq"/><circle class="z4cigfbsf"/><path class="xrnmq47gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:music-album-duotone"} {...others} />);
}

export default Component;
