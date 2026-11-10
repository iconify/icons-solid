import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjvxzuhxb.css';
import '../../css/s/st_h4wr9f.css';
import '../../css/x/xevbdpb8p.css';
import '../../css/z/zdkw5sbus.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pjvxzuhxb"/><path class="st_h4wr9f"/><path class="xevbdpb8p"/><path class="zdkw5sbus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:gamepad"} {...others} />);
}

export default Component;
