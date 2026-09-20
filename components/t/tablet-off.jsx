import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5xdmn.css';
import '../../css/f/f282tn.css';
import '../../css/q/q_gbmg.css';
import '../../css/o/oxx-om.css';
import '../../css/t/tbv09e.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-70.css';
import '../../css/d/d-4c0-hc.css';
import '../../css/d/d-i58k3z.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG8A4hDe8r"><path class="c5xdmn f282tn"/><path class="q_gbmg"/><path class="c5xdmn oxx-om tbv09e"/></mask></defs><path mask="url(#SVG8A4hDe8r)" class="botfzx"/><path class="c5xdmn gd_4-q tbv09e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:tablet-off"} {...others} />);
}

export default Component;
