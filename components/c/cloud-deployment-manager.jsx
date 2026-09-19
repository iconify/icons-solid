import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzuiojx9e.css';
import '../../css/n/nsyt08d_e.css';
import '../../css/w/wih24989u.css';
import '../../css/f/fb8lirbth.css';
import '../../css/t/tq1p4bhlk.css';
import '../../css/m/mhxjdibth.css';
import '../../css/g/gefnsbetv.css';
import '../../css/k/kws27d0mq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lzuiojx9e"/><path class="nsyt08d_e"/><path class="wih24989u"/><path class="fb8lirbth"/><path class="tq1p4bhlk"/><path class="mhxjdibth"/><path class="gefnsbetv"/><path class="kws27d0mq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-deployment-manager"} {...others} />);
}

export default Component;
