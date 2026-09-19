import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrj3u1bll.css';
import '../../css/r/rqx6mb8tf.css';
import '../../css/z/zk9k2rbop.css';
import '../../css/o/o0xw4kbra.css';
import '../../css/b/bii24pcyv.css';
import '../../css/y/yu-8ivbvt.css';
import '../../css/f/fekmfbc2r.css';
import '../../css/w/waclp09ax.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVGtpt2feVz" class="mrj3u1bll"/></defs><use href="#SVGtpt2feVz"/><use href="#SVGtpt2feVz"/><path class="rqx6mb8tf"/><path class="zk9k2rbop"/><path class="o0xw4kbra"/><g class="bii24pcyv"><path class="yu-8ivbvt"/><path class="fekmfbc2r"/><path class="waclp09ax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:do-not-inhale"} {...others} />);
}

export default Component;
