import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwd9gcbwy.css';
import '../../css/y/yhfjf2bxj.css';
import '../../css/w/w0h_n4b4h.css';
import '../../css/u/udpd7acrg.css';
import '../../css/o/o6a16lpep.css';
import '../../css/h/ht7gvubvq.css';
import '../../css/n/ntf9o4i7i.css';
import '../../css/j/jlpdnyw-m.css';
import '../../css/b/b2toc9kei.css';
import '../../css/x/xkduudc5o.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mwd9gcbwy"/><path class="yhfjf2bxj"/><path class="w0h_n4b4h"/><path class="udpd7acrg"/><path class="o6a16lpep"/><path class="ht7gvubvq"/><path class="ntf9o4i7i"/><path class="jlpdnyw-m"/><path class="b2toc9kei"/><path class="xkduudc5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:water-wheel-20-bold"} {...others} />);
}

export default Component;
