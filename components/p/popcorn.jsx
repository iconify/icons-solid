import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yvl34nbls.css';
import '../../css/n/nq-_jbb4i.css';
import '../../css/h/h4el0xb2m.css';
import '../../css/p/p5cj8ebmf.css';
import '../../css/l/lpi9g3wtw.css';
import '../../css/x/xoi34xgnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="yvl34nbls"/><path class="nq-_jbb4i"/><path class="h4el0xb2m"/><path class="p5cj8ebmf"/><path class="lpi9g3wtw"/><path class="xoi34xgnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:popcorn"} {...others} />);
}

export default Component;
