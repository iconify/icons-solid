import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hj8fw8upx.css';
import '../../css/g/gv77zhbby.css';
import '../../css/f/fa4lrsbuw.css';
import '../../css/m/mdra5qi3b.css';
import '../../css/i/iztv2lhgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hj8fw8upx"/><path class="gv77zhbby wm-k"/><path class="fa4lrsbuw wm-k"/><path class="mdra5qi3b wm-a"/><circle class="iztv2lhgg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:disc-sketch"} {...others} />);
}

export default Component;
