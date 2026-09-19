import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh96yfr3m.css';
import '../../css/b/ba4pmswhb.css';
import '../../css/d/dzb76ub5g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zh96yfr3m"/><path class="ba4pmswhb"/><path class="dzb76ub5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:speakeronesoundwave"} {...others} />);
}

export default Component;
