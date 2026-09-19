import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5_9cmqso.css';
import '../../css/o/og6-izz4a.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="e5_9cmqso"/><path class="og6-izz4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:comment-info-duo"} {...others} />);
}

export default Component;
