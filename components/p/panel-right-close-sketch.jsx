import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/x/xd3-h5bhn.css';
import '../../css/j/jb6dax1-j.css';
import '../../css/f/ff_yt5b1u.css';
import '../../css/p/p3bl42yuf.css';
import '../../css/e/ebsvtkeca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="xd3-h5bhn"/><path class="jb6dax1-j wm-k"/><path class="ff_yt5b1u wm-a"/><path class="p3bl42yuf wm-k"/><path class="ebsvtkeca wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:panel-right-close-sketch"} {...others} />);
}

export default Component;
