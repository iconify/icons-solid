import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/b/bkf8h8bbq.css';
import '../../css/n/na5ys7boe.css';
import '../../css/j/jnoev2irk.css';
import '../../css/n/n7fi-9kdb.css';
import '../../css/w/w-iaa4bou.css';
import '../../css/o/oi2e-flij.css';
import '../../css/g/g9s34q05z.css';
import '../../css/v/vkxyztbfq.css';
import '../../css/y/yqa_xabef.css';
import '../../css/u/us9_di8gl.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><path class="bkf8h8bbq"/><path class="na5ys7boe"/><path transform="rotate(90)" class="jnoev2irk"/><path class="n7fi-9kdb"/><path class="w-iaa4bou"/><path transform="matrix(0 1 1 0 0 0)" class="oi2e-flij"/><path class="g9s34q05z"/><path class="vkxyztbfq"/><path transform="rotate(90)" class="yqa_xabef"/><path class="us9_di8gl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:settings"} {...others} />);
}

export default Component;
