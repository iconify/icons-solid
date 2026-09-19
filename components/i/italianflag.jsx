import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kobakmnrv.css';
import '../../css/r/rcci-d4wx.css';
import '../../css/b/b197rfn0j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kobakmnrv"/><path class="rcci-d4wx"/><path class="b197rfn0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:italianflag"} {...others} />);
}

export default Component;
