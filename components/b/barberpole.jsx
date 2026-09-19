import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmi-m1byp.css';
import '../../css/w/wabkv5x6c.css';
import '../../css/f/f6j6ebcpk.css';
import '../../css/a/a9480j_gl.css';
import '../../css/j/jpuqzh8by.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zmi-m1byp"/><path class="wabkv5x6c"/><path class="f6j6ebcpk"/><path class="a9480j_gl"/><path class="jpuqzh8by"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:barberpole"} {...others} />);
}

export default Component;
