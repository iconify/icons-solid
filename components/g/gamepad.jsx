import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w86xl1zzt.css';
import '../../css/s/st_h4wr9f.css';
import '../../css/x/xevbdpb8p.css';
import '../../css/r/r406_6bde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 22.38 17.67)" class="w86xl1zzt"/><path class="st_h4wr9f"/><path class="xevbdpb8p"/><rect transform="matrix(0 -1 -1 0 22.38 17.67)" class="r406_6bde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gamepad"} {...others} />);
}

export default Component;
