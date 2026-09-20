import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vp-ggza2u.css';
import '../../css/q/q0336sbxe.css';
import '../../css/k/kxcrqwuhm.css';
import '../../css/n/n1e42pbiw.css';
import '../../css/e/ezje8vntv.css';
import '../../css/q/qnkc9q1rc.css';
import '../../css/b/b4614ob5q.css';
import '../../css/q/qbc2g2bin.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="vp-ggza2u"/><path class="q0336sbxe"/><path class="kxcrqwuhm"/><path clip-rule="evenodd" class="n1e42pbiw"/><path class="ezje8vntv"/><path class="qnkc9q1rc"/><path class="b4614ob5q"/><path class="qbc2g2bin"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cat-bold-duotone"} {...others} />);
}

export default Component;
