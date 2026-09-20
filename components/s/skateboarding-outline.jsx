import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sr574zs-y.css';
import '../../css/w/wksgl3bzq.css';
import '../../css/c/cf5jn0plh.css';
import '../../css/p/paps9864j.css';
import '../../css/s/s05kiwb2w.css';
import '../../css/q/q96rhebcu.css';
import '../../css/o/o0pfhwbdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="sr574zs-y"/><path class="wksgl3bzq"/><path class="cf5jn0plh"/><path clip-rule="evenodd" class="paps9864j"/><path clip-rule="evenodd" class="s05kiwb2w"/><path class="q96rhebcu"/><path class="o0pfhwbdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:skateboarding-outline"} {...others} />);
}

export default Component;
