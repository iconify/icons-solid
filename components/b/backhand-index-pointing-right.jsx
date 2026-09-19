import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yft98tjya.css';

const viewBox = {"width":32,"height":32};
const content = `<g transform="translate(32 0) scale(-1 1)"><path class="yft98tjya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:backhand-index-pointing-right"} {...others} />);
}

export default Component;
