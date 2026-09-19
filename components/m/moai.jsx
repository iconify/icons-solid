import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhpd0_utu.css';
import '../../css/j/jrh-e7b-k.css';
import '../../css/q/qwnvu9buq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uhpd0_utu"/><path class="jrh-e7b-k"/><path class="qwnvu9buq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:moai"} {...others} />);
}

export default Component;
