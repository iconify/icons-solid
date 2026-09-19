import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1v3b-obh.css';
import '../../css/c/cgfcjfb0i.css';
import '../../css/l/lrqfpk3ka.css';
import '../../css/p/pvf-i_bsx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h1v3b-obh"/><path class="cgfcjfb0i"/><path class="lrqfpk3ka"/><circle class="pvf-i_bsx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:blossom"} {...others} />);
}

export default Component;
