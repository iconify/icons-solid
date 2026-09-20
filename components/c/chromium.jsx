import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/t/tl1gbxbmv.css';
import '../../css/j/j6dt124gf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="tl1gbxbmv"/><path class="j6dt124gf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:chromium"} {...others} />);
}

export default Component;
