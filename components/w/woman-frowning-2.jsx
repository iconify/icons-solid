import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2ixuwbwg.css';
import '../../css/i/irtxc2bbo.css';
import '../../css/w/wjwbyob3y.css';
import '../../css/h/htd15jenx.css';
import '../../css/n/nxw4_acjk.css';
import '../../css/k/kmuy0tbkp.css';
import '../../css/n/njr7sy4rm.css';
import '../../css/z/z0mpx8aky.css';
import '../../css/h/h2ln-7b3s.css';
import '../../css/j/jugp0mbvp.css';
import '../../css/c/cje1k7rsu.css';
import '../../css/x/xzz95n2hm.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z2ixuwbwg"/><path class="irtxc2bbo"/><path class="wjwbyob3y"/><path class="htd15jenx"/><path class="nxw4_acjk"/><path class="kmuy0tbkp"/><path class="njr7sy4rm"/><path class="z0mpx8aky"/><path class="h2ln-7b3s"/><path class="jugp0mbvp"/><path class="cje1k7rsu"/><path class="xzz95n2hm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:woman-frowning-2"} {...others} />);
}

export default Component;
