import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fvantbcbw.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/e/ec3ftbzyw.css';
import '../../css/t/tj2_w8ydf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fvantbcbw"/><g class="kdz4acc8r"><path class="ec3ftbzyw"/><path class="tj2_w8ydf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:busts-in-silhouette"} {...others} />);
}

export default Component;
