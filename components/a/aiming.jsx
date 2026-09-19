import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5xqhxysz.css';
import '../../css/i/iwgzn0blj.css';
import '../../css/b/b-k2umbar.css';
import '../../css/e/e-gt1nb9e.css';
import '../../css/l/l4z9n70bk.css';
import '../../css/k/k8st4rbni.css';
import '../../css/g/gdsxz2b6z.css';
import '../../css/o/od6yz26qs.css';
import '../../css/y/y23cawbjs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle class="c5xqhxysz"/><path clip-rule="evenodd" class="iwgzn0blj"/><path class="b-k2umbar"/><path clip-rule="evenodd" class="e-gt1nb9e"/><path class="l4z9n70bk"/><path clip-rule="evenodd" class="k8st4rbni"/><path class="gdsxz2b6z"/><path clip-rule="evenodd" class="od6yz26qs"/><path class="y23cawbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:aiming"} {...others} />);
}

export default Component;
