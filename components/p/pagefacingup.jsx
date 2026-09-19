import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbg_emk3p.css';
import '../../css/q/qrb1vdrhq.css';
import '../../css/w/whu0plbbo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tbg_emk3p"/><path class="qrb1vdrhq"/><path class="whu0plbbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pagefacingup"} {...others} />);
}

export default Component;
