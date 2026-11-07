import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb7lpq_wf.css';
import '../../css/q/qgr7uybef.css';
import '../../css/l/lo2kz2b5c.css';
import '../../css/r/rtrsrablt.css';
import '../../css/o/o-rp_-brq.css';
import '../../css/v/vp3680bwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jb7lpq_wf"/><path clip-rule="evenodd" class="qgr7uybef"/><path class="lo2kz2b5c"/><path class="rtrsrablt"/><path class="o-rp_-brq"/><path class="vp3680bwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-round-bold"} {...others} />);
}

export default Component;
