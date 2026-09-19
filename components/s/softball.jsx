import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d455gnbrv.css';
import '../../css/n/n8t_iia7t.css';
import '../../css/f/fsevodr8c.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="d455gnbrv"/><path class="n8t_iia7t"/><path class="fsevodr8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:softball"} {...others} />);
}

export default Component;
