import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zz6h4kbwi.css';
import '../../css/c/ctvx1x6ua.css';
import '../../css/q/qrplm35by.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zz6h4kbwi"/><path class="ctvx1x6ua"/><path class="qrplm35by"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-beer"} {...others} />);
}

export default Component;
