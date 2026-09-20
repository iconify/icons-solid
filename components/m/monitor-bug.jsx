import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbozx3bjl.css';
import '../../css/s/svt6jvbjg.css';
import '../../css/b/b5ir8acmo.css';
import '../../css/o/ongcj-dgj.css';
import '../../css/l/ld302rnpq.css';
import '../../css/e/ecolffb3j.css';
import '../../css/f/f0_hc-b5z.css';
import '../../css/d/d2ej0cbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kbozx3bjl"/><path class="svt6jvbjg"/><path class="b5ir8acmo"/><path class="ongcj-dgj"/><path class="ld302rnpq"/><path class="ecolffb3j"/><path class="f0_hc-b5z"/><path class="d2ej0cbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:monitor-bug"} {...others} />);
}

export default Component;
