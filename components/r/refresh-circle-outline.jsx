import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1h_8isxf.css';
import '../../css/e/eu7dfbmgb.css';
import '../../css/q/q-tflgzje.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b1h_8isxf"/><path class="eu7dfbmgb"/><path class="q-tflgzje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:refresh-circle-outline"} {...others} />);
}

export default Component;
