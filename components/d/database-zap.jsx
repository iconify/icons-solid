import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ei3f7vokp.css';
import '../../css/t/tgtuxs_ze.css';
import '../../css/r/rn913dbor.css';
import '../../css/t/tqjnvpken.css';
import '../../css/x/xfthtjbma.css';
import '../../css/b/b41prxj8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ei3f7vokp"/><path class="tgtuxs_ze wm-s"/><path class="rn913dbor wm-shine"/><path class="tqjnvpken wm-k"/><path class="wm-a xfthtjbma"/><path class="b41prxj8s wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:database-zap"} {...others} />);
}

export default Component;
