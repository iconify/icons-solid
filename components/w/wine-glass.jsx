import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeo1ixbek.css';
import '../../css/i/i5sc_mbua.css';
import '../../css/u/u-0vobhqw.css';
import '../../css/p/plhbj3bpm.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="oeo1ixbek"/><path class="i5sc_mbua"/><path class="u-0vobhqw"/><path class="plhbj3bpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:wine-glass"} {...others} />);
}

export default Component;
