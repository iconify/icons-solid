import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cvdr47bwg.css';
import '../../css/z/zx35ipbqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="cvdr47bwg wm-k"/><path class="wm-s zx35ipbqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-search-gloss"} {...others} />);
}

export default Component;
