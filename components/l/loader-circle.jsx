import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s-_v4xbgv.css';
import '../../css/i/i9whccb8f.css';
import '../../css/d/d5cjiyxkp.css';
import '../../css/r/r3gh44b3h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s-_v4xbgv wm-shadow"/><path class="i9whccb8f wm-shadow"/><path class="d5cjiyxkp"/><path class="r3gh44b3h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:loader-circle"} {...others} />);
}

export default Component;
