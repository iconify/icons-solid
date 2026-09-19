import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/peniq4-zy.css';
import '../../css/c/cn0m6ebzb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="peniq4-zy"/><path class="cn0m6ebzb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:folder-video-thin"} {...others} />);
}

export default Component;
