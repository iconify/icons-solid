import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8j8r5b7r.css';
import '../../css/k/k9pq-abme.css';
import '../../css/w/wgi6stbor.css';
import '../../css/h/hn1-zdavx.css';
import '../../css/v/vfgesksmk.css';
import '../../css/z/zf3gldbzw.css';
import '../../css/f/f8beoc-ou.css';
import '../../css/f/f939kc9wm.css';
import '../../css/u/us4_au4yp.css';
import '../../css/s/sm-3czmoo.css';
import '../../css/c/cfxd2bcnj.css';
import '../../css/r/rh0i7-b5z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="p8j8r5b7r"/><g class="k9pq-abme"><path class="wgi6stbor"/><path class="hn1-zdavx"/><path class="vfgesksmk"/></g><path class="zf3gldbzw"/><path class="f8beoc-ou"/><path class="f939kc9wm"/><path class="us4_au4yp"/><path class="sm-3czmoo"/><path class="cfxd2bcnj"/><path class="rh0i7-b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:man-shrugging-medium-skin-tone"} {...others} />);
}

export default Component;
