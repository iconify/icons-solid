import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4ryehbtk.css';
import '../../css/o/oer4vzb7i.css';
import '../../css/q/qfi1eobso.css';
import '../../css/n/nm77xz_kd.css';
import '../../css/j/j_kddl3rg.css';
import '../../css/e/e0sce_-0i.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="g4ryehbtk"/><path class="oer4vzb7i"/><path class="qfi1eobso"/><path class="nm77xz_kd"/><path class="j_kddl3rg"/><path class="e0sce_-0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rescue-workers-helmet"} {...others} />);
}

export default Component;
