import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/u/uh7vihbug.css';
import '../../css/a/atdgcs-rq.css';
import '../../css/e/ephh2nb0p.css';
import '../../css/b/bfbvqopkl.css';
import '../../css/g/gm5fpdzho.css';
import '../../css/g/gtr_3lb7f.css';
import '../../css/s/sbgzg9iln.css';
import '../../css/x/xfsc7yagq.css';
import '../../css/z/zmxrbbb7e.css';
import '../../css/m/mwhj2tb7v.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="uh7vihbug"/><path class="atdgcs-rq"/><path class="ephh2nb0p"/><path class="bfbvqopkl"/><path class="gm5fpdzho"/><path class="gtr_3lb7f"/><path class="sbgzg9iln"/><circle class="xfsc7yagq"/><circle class="zmxrbbb7e"/><circle class="mwhj2tb7v"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-eswatini"} {...others} />);
}

export default Component;
