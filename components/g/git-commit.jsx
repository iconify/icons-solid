import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qdgg9o7gm.css';
import '../../css/y/yj-u4-b1a.css';
import '../../css/u/ue-3m3pjk.css';
import '../../css/v/v9rf76qss.css';
import '../../css/u/uaekaomcv.css';
import '../../css/u/uiti2t7xm.css';
import '../../css/t/txc-clbgi.css';
import '../../css/a/a_qwusnxs.css';
import '../../css/a/a-n6erbcg.css';
import '../../css/p/pfgaibcip.css';
import '../../css/p/pc6ozgkfa.css';
import '../../css/o/oino8n56q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qdgg9o7gm wm-shadow"/><path class="yj-u4-b1a"/><path class="ue-3m3pjk"/><path class="v9rf76qss"/><path class="uaekaomcv"/><path class="uiti2t7xm"/><path class="txc-clbgi"/><path class="a_qwusnxs"/><path class="a-n6erbcg"/><path class="pfgaibcip"/><path class="pc6ozgkfa wm-shine"/><path class="oino8n56q wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-luxe:git-commit"} {...others} />);
}

export default Component;
