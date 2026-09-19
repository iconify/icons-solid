import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puik6mbbn.css';
import '../../css/g/gko-8bc7z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="puik6mbbn"/><path class="gko-8bc7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:right-anger-bubble"} {...others} />);
}

export default Component;
