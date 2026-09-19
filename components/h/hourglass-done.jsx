import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fej6-wblt.css';
import '../../css/f/fk97eubrf.css';
import '../../css/o/oiuah7msq.css';
import '../../css/z/z7jnd8bsx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="fej6-wblt"/><path class="fk97eubrf"/><path class="oiuah7msq"/><path class="z7jnd8bsx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hourglass-done"} {...others} />);
}

export default Component;
