import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvdj2lb-t.css';
import '../../css/q/qndo5pb1f.css';
import '../../css/y/y03fyccpv.css';
import '../../css/x/x99bwxbol.css';
import '../../css/e/ebzc6hgzr.css';
import '../../css/c/c-46i37-a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bvdj2lb-t"/><path class="qndo5pb1f"/><g class="y03fyccpv"><path class="x99bwxbol"/><path class="ebzc6hgzr"/><path class="c-46i37-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:gb-wls-1x1"} {...others} />);
}

export default Component;
