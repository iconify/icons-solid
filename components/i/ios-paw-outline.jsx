import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v4d6rcc0y.css';
import '../../css/c/cctr5u8fb.css';
import '../../css/q/qbem65zxw.css';
import '../../css/p/pwdn0_bfh.css';
import '../../css/w/wlo-fzbut.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v4d6rcc0y"/><path class="cctr5u8fb"/><path class="qbem65zxw"/><path class="pwdn0_bfh"/><path class="wlo-fzbut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-paw-outline"} {...others} />);
}

export default Component;
