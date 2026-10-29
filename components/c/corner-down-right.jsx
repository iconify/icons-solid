import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htwsylpoh.css';
import '../../css/e/e2qodo21c.css';
import '../../css/n/ntyxgabju.css';
import '../../css/k/k-z79q7im.css';
import '../../css/m/mfquifb4t.css';
import '../../css/p/pxavgmb9q.css';
import '../../css/t/tnonx1bhs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="htwsylpoh wm-shadow"/><path class="e2qodo21c wm-k"/><path class="ntyxgabju wm-k"/><path class="k-z79q7im wm-k"/><path class="mfquifb4t wm-k"/><path class="pxavgmb9q wm-k"/><path class="tnonx1bhs wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:corner-down-right"} {...others} />);
}

export default Component;
