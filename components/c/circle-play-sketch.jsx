import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/us4l7n-bh.css';
import '../../css/v/v4goc3b9j.css';
import '../../css/t/th46yjuif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="us4l7n-bh"/><path class="v4goc3b9j wm-k"/><path class="th46yjuif wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:circle-play-sketch"} {...others} />);
}

export default Component;
