import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/ozgrq5b1r.css';
import '../../css/l/l7avsacre.css';
import '../../css/q/qfez7pbdx.css';
import '../../css/b/bbx74dvkh.css';
import '../../css/f/f08pkdblx.css';
import '../../css/v/vdhgeqfxw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="ozgrq5b1r"/><circle class="l7avsacre"/><circle class="qfez7pbdx"/><circle class="bbx74dvkh"/><path class="f08pkdblx"/><path class="vdhgeqfxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:whole-site-accelerator"} {...others} />);
}

export default Component;
