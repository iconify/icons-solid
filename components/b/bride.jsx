import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp1aifbnx.css';
import '../../css/k/kawo_7l4k.css';
import '../../css/c/cz6a57vso.css';
import '../../css/q/qnqus_b9r.css';
import '../../css/d/dsotzhsxu.css';
import '../../css/e/es-m_7ylc.css';
import '../../css/g/gmz_6tbcb.css';
import '../../css/f/f9bku8wvz.css';
import '../../css/g/gwnm84i9x.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hp1aifbnx"/><path class="kawo_7l4k"/><path class="cz6a57vso"/><path class="qnqus_b9r"/><path class="dsotzhsxu"/><path class="es-m_7ylc"/><path class="gmz_6tbcb"/><path class="f9bku8wvz"/><path class="gwnm84i9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bride"} {...others} />);
}

export default Component;
