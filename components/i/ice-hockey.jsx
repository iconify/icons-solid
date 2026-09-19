import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7mpkzoaz.css';
import '../../css/r/rpnscybxj.css';
import '../../css/f/f2nivyzex.css';
import '../../css/g/gyad0vb_a.css';
import '../../css/s/sqowgsbmh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="q7mpkzoaz"/><path class="rpnscybxj"/><path class="f2nivyzex"/><path class="gyad0vb_a"/><path class="sqowgsbmh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:ice-hockey"} {...others} />);
}

export default Component;
