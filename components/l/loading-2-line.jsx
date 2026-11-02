import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfecm9-nm.css';
import '../../css/o/ogzvocccz.css';
import '../../css/u/ue203ab6f.css';
import '../../css/s/s28ko4kec.css';
import '../../css/t/t-j_e917h.css';
import '../../css/v/vc0943bvd.css';
import '../../css/y/ymi11lgla.css';
import '../../css/l/l2hq0acuk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dfecm9-nm"/><path class="ogzvocccz"/><path class="ue203ab6f"/><path class="s28ko4kec"/><path class="t-j_e917h"/><path class="vc0943bvd"/><path class="ymi11lgla"/><path class="l2hq0acuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:loading-2-line"} {...others} />);
}

export default Component;
