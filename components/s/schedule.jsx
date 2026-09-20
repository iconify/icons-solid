import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpq5lkbeg.css';
import '../../css/t/t-fmohbfu.css';
import '../../css/z/zeoxv5b2o.css';
import '../../css/z/zia5oxbuh.css';
import '../../css/q/q7znoxdcs.css';
import '../../css/o/oclompb7u.css';
import '../../css/p/pmgt1fc3u.css';
import '../../css/y/y4_fhtb_d.css';
import '../../css/q/qehrp4uma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fpq5lkbeg"/><path class="t-fmohbfu"/><circle class="zeoxv5b2o"/><circle class="zia5oxbuh"/><circle class="q7znoxdcs"/><circle class="oclompb7u"/><circle class="pmgt1fc3u"/><circle class="y4_fhtb_d"/><path class="qehrp4uma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:schedule"} {...others} />);
}

export default Component;
