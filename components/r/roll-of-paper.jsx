import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ky9ep5ygo.css';
import '../../css/q/q8dg84_vw.css';
import '../../css/q/qpvumgbpy.css';
import '../../css/l/lbhwhxbsh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ky9ep5ygo"/><path class="q8dg84_vw"/><path class="qpvumgbpy"/><path class="lbhwhxbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:roll-of-paper"} {...others} />);
}

export default Component;
