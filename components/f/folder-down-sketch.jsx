import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jw1_a3bff.css';
import '../../css/y/yz8i15ydf.css';
import '../../css/b/b59i1cc7c.css';
import '../../css/q/qmr9gv51z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jw1_a3bff"/><path class="wm-a yz8i15ydf"/><path class="b59i1cc7c wm-k"/><path class="qmr9gv51z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:folder-down-sketch"} {...others} />);
}

export default Component;
