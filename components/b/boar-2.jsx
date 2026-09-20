import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5071onvx.css';
import '../../css/z/zyra6acnc.css';
import '../../css/x/xpk65fgpw.css';
import '../../css/w/wy76w6bcx.css';
import '../../css/s/syci-3bns.css';
import '../../css/j/jo4hres2b.css';
import '../../css/n/nndmlh7ej.css';
import '../../css/z/zwxfz4b3s.css';
import '../../css/u/u8432bnen.css';
import '../../css/g/g6jhu2bvl.css';
import '../../css/x/xqm5b9a4q.css';
import '../../css/r/r82zgpscy.css';
import '../../css/w/w9sn9bc2h.css';
import '../../css/j/j7vq8m7ug.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="q5071onvx"/><path class="zyra6acnc"/><path class="xpk65fgpw"/><path class="wy76w6bcx"/><path class="syci-3bns"/><path class="jo4hres2b"/><path class="nndmlh7ej"/><path class="zwxfz4b3s"/><path class="u8432bnen"/><path class="g6jhu2bvl"/><path class="xqm5b9a4q"/><path class="r82zgpscy"/><path class="w9sn9bc2h"/><path class="j7vq8m7ug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:boar-2"} {...others} />);
}

export default Component;
