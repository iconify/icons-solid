import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnbjpsbvr.css';
import '../../css/u/uhoxfmboe.css';
import '../../css/q/qpa21bbij.css';
import '../../css/m/mm0rrvbhg.css';
import '../../css/t/tsquhwb9j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="fnbjpsbvr"/><path class="uhoxfmboe"/><path class="qpa21bbij"/><path class="mm0rrvbhg"/><path class="tsquhwb9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:monkey-face"} {...others} />);
}

export default Component;
