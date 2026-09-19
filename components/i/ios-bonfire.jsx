import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4217jzxg.css';
import '../../css/z/zhjwxhxow.css';
import '../../css/j/jfi18-b_j.css';
import '../../css/b/bawl8kb6w.css';
import '../../css/n/n109qknsp.css';
import '../../css/o/o-ny1ab1r.css';
import '../../css/r/rg3j6ubse.css';
import '../../css/k/klz5gil6u.css';
import '../../css/s/szwoy0b_y.css';
import '../../css/n/nsanmccuc.css';
import '../../css/w/wfdeg838f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d4217jzxg"/><path class="zhjwxhxow"/><path class="jfi18-b_j"/><path class="bawl8kb6w"/><path class="n109qknsp"/><path class="o-ny1ab1r"/><path class="rg3j6ubse"/><path class="klz5gil6u"/><path class="szwoy0b_y"/><path class="nsanmccuc"/><path class="wfdeg838f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-bonfire"} {...others} />);
}

export default Component;
