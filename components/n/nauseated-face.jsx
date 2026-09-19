import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wb8qrvbam.css';
import '../../css/f/f5tq5acha.css';
import '../../css/s/s-v07-dkt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wb8qrvbam"/><path class="f5tq5acha"/><path class="s-v07-dkt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:nauseated-face"} {...others} />);
}

export default Component;
