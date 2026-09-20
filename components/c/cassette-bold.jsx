import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pn81iubzf.css';
import '../../css/n/nh7uxzb_k.css';
import '../../css/l/l-5n86b-i.css';
import '../../css/x/ximelvc9q.css';
import '../../css/w/wf3f68bth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pn81iubzf"/><path class="nh7uxzb_k"/><path class="l-5n86b-i"/><path clip-rule="evenodd" class="ximelvc9q"/><path class="wf3f68bth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cassette-bold"} {...others} />);
}

export default Component;
