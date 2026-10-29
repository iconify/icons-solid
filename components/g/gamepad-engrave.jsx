import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/b/bqi8s4bgh.css';
import '../../css/p/p3y-97bfh.css';
import '../../css/l/lo-bdo53p.css';
import '../../css/t/tcjvbpb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="bqi8s4bgh wm-k"/><path class="p3y-97bfh wm-shadow"/><path class="lo-bdo53p wm-k"/><path class="tcjvbpb5r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gamepad-engrave"} {...others} />);
}

export default Component;
