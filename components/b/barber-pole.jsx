import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_69sacww.css';
import '../../css/j/joejem94l.css';
import '../../css/t/tfva2qacf.css';
import '../../css/y/ywvcqcg1f.css';
import '../../css/b/b8uh4ccim.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="q_69sacww"/><path class="joejem94l"/><path class="tfva2qacf"/><path class="ywvcqcg1f"/><path class="b8uh4ccim"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:barber-pole"} {...others} />);
}

export default Component;
