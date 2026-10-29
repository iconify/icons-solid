import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iybtqzc1y.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/q/qcj08-q2z.css';
import '../../css/p/perttu9bq.css';
import '../../css/k/kucshig4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="iybtqzc1y wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="qcj08-q2z wm-k"/><path class="perttu9bq wm-a"/><path class="kucshig4r wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:receipt-blueprint"} {...others} />);
}

export default Component;
