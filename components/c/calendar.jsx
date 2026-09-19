import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e4i3ki2pe.css';
import '../../css/v/v_hbrccao.css';
import '../../css/z/z21ut7bfm.css';
import '../../css/k/krj2or7of.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="e4i3ki2pe"/><path class="v_hbrccao"/><path class="z21ut7bfm"/><path class="krj2or7of"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:calendar"} {...others} />);
}

export default Component;
