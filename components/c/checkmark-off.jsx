import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1c3_hbmh.css';
import '../../css/j/jn_tsyv7z.css';
import '../../css/s/snl4n64vp.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f1c3_hbmh"/><path class="jn_tsyv7z"/><path class="snl4n64vp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:checkmark-off"} {...others} />);
}

export default Component;
