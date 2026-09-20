import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k8vjp8bic.css';
import '../../css/l/lb6lex7-t.css';
import '../../css/z/zlcpk-bqz.css';
import '../../css/j/jbbepsbec.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="k8vjp8bic"/><path class="lb6lex7-t"/><path class="zlcpk-bqz"/><path class="jbbepsbec"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:chromecast-1-expressive"} {...others} />);
}

export default Component;
