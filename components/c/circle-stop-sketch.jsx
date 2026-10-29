import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/whqs1q3at.css';
import '../../css/z/zkx0jcb5b.css';
import '../../css/x/xbk20hdgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="whqs1q3at"/><path class="wm-k zkx0jcb5b"/><path class="wm-a xbk20hdgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-stop-sketch"} {...others} />);
}

export default Component;
