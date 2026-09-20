import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/relf4wlgz.css';
import '../../css/w/wgp41r-zq.css';
import '../../css/x/xedfp2bky.css';
import '../../css/v/v-yptlb6t.css';
import '../../css/y/yh489cblu.css';
import '../../css/m/mglsn2bhu.css';
import '../../css/d/djv2ngaor.css';
import '../../css/s/snp287xku.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="relf4wlgz"/><path class="wgp41r-zq"/><path class="xedfp2bky"/><path class="v-yptlb6t"/><path class="yh489cblu"/><path class="mglsn2bhu"/><path class="djv2ngaor"/><path class="snp287xku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:portugal"} {...others} />);
}

export default Component;
