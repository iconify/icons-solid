import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o7rbqjl-d.css';
import '../../css/r/r7kcmcpio.css';
import '../../css/i/ipn962bhm.css';
import '../../css/t/tawcsacjo.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="o7rbqjl-d"/><path class="r7kcmcpio"/><path clip-rule="evenodd" class="ipn962bhm"/><path class="tawcsacjo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:right-facing-fist-medium-dark"} {...others} />);
}

export default Component;
