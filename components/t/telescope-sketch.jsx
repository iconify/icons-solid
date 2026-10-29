import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qcj0w7beu.css';
import '../../css/g/go8wiqrnw.css';
import '../../css/j/jj7v60bhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qcj0w7beu wm-a"/><path class="go8wiqrnw wm-k"/><path class="jj7v60bhl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:telescope-sketch"} {...others} />);
}

export default Component;
