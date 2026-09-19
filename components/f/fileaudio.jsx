import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btx7j3qro.css';
import '../../css/l/l_uqpac8o.css';
import '../../css/q/qwjmiebxi.css';
import '../../css/f/fqv6mgkqk.css';

const viewBox = {"width":15,"height":16};
const content = `<path class="btx7j3qro"/><path class="l_uqpac8o"/><path class="qwjmiebxi"/><path class="fqv6mgkqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:fileaudio"} {...others} />);
}

export default Component;
