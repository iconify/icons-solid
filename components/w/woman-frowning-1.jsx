import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o375i5b2c.css';
import '../../css/j/j8oh0cbfu.css';
import '../../css/w/wjwbyob3y.css';
import '../../css/h/htd15jenx.css';
import '../../css/n/nxw4_acjk.css';
import '../../css/k/kmuy0tbkp.css';
import '../../css/n/njr7sy4rm.css';
import '../../css/f/fns04wbbb.css';
import '../../css/j/jkpv1nbrp.css';
import '../../css/j/jugp0mbvp.css';
import '../../css/o/ojukncb5r.css';
import '../../css/x/xzz95n2hm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="o375i5b2c"/><path class="j8oh0cbfu"/><path class="wjwbyob3y"/><path class="htd15jenx"/><path class="nxw4_acjk"/><path class="kmuy0tbkp"/><path class="njr7sy4rm"/><path class="fns04wbbb"/><path class="jkpv1nbrp"/><path class="jugp0mbvp"/><path class="ojukncb5r"/><path class="xzz95n2hm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:woman-frowning-1"} {...others} />);
}

export default Component;
