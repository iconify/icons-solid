import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as2iwumwv.css';
import '../../css/k/kwzcfwb6x.css';
import '../../css/p/petp2dagr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="as2iwumwv"/><path class="kwzcfwb6x"/><path class="petp2dagr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:coral"} {...others} />);
}

export default Component;
