import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/p/peniq4-zy.css';
import '../../css/c/cn0m6ebzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="peniq4-zy"/><path class="cn0m6ebzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-video-light"} {...others} />);
}

export default Component;
