import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcngdml6y.css';
import '../../css/v/v-zyn29io.css';
import '../../css/j/jt4flvwbj.css';
import '../../css/b/bn_5kebpl.css';
import '../../css/s/sg_40utxr.css';
import '../../css/g/g90dzbb6i.css';
import '../../css/d/djb9e33jf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vcngdml6y"/><path class="v-zyn29io"/><path class="jt4flvwbj"/><path class="bn_5kebpl"/><path class="sg_40utxr"/><path class="g90dzbb6i"/><path class="djb9e33jf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:spanishflag"} {...others} />);
}

export default Component;
