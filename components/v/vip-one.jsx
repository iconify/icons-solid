import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hx-py_msp.css';
import '../../css/i/i7bfnabyt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="hx-py_msp"/><path class="i7bfnabyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vip-one"} {...others} />);
}

export default Component;
