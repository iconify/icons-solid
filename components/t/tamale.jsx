import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/waeyq-bmb.css';
import '../../css/a/a-1ymo2io.css';
import '../../css/v/vi7xisb2j.css';
import '../../css/q/qy82b0b-y.css';
import '../../css/q/qvczl73tl.css';
import '../../css/q/qusyggbsl.css';
import '../../css/m/mnk_x6kda.css';
import '../../css/n/nu7n0n5fo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="waeyq-bmb"/><path class="a-1ymo2io"/><path class="vi7xisb2j"/><path class="qy82b0b-y"/><path class="qvczl73tl"/><path class="qusyggbsl"/><path class="mnk_x6kda"/><path class="nu7n0n5fo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:tamale"} {...others} />);
}

export default Component;
