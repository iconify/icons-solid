import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dzrxlf1os.css';
import '../../css/f/fxugh4b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="dzrxlf1os"/><path class="fxugh4b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-video"} {...others} />);
}

export default Component;
