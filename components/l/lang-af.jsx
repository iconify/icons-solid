import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/e/e4nujc3hj.css';
import '../../css/g/gg-v_ymcg.css';
import '../../css/s/si2iccb6i.css';
import '../../css/m/mno5kackk.css';
import '../../css/z/ziln8tbws.css';
import '../../css/q/q06i0p5xv.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="e4nujc3hj"/><path class="gg-v_ymcg"/><path class="si2iccb6i"/><path class="mno5kackk"/><path class="ziln8tbws"/><path class="q06i0p5xv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-af"} {...others} />);
}

export default Component;
