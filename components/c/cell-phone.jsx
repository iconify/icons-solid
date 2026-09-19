import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4jr_x99l.css';
import '../../css/n/nliu6k9wx.css';
import '../../css/i/ize7wpb1y.css';
import '../../css/x/xustz9bxl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r4jr_x99l"/><path class="nliu6k9wx"/><path class="ize7wpb1y"/><path class="xustz9bxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:cell-phone"} {...others} />);
}

export default Component;
