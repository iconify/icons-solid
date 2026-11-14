import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xo5wf044s.css';
import '../../css/i/ibt8-_bdu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xo5wf044s"/><path class="ibt8-_bdu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:video-ai"} {...others} />);
}

export default Component;
