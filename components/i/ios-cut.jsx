import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tbht7_vyu.css';
import '../../css/h/hxw8-dzsl.css';
import '../../css/f/f_pda4xwk.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tbht7_vyu"/><path class="hxw8-dzsl"/><path class="f_pda4xwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cut"} {...others} />);
}

export default Component;
