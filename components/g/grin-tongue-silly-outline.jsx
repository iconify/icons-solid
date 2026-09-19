import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fj5pjgwej.css';
import '../../css/d/d0kd7jw0a.css';
import '../../css/y/ysy17awtw.css';
import '../../css/m/mezav531a.css';
import '../../css/q/qy-1xec4t.css';
import '../../css/i/i6uwe5bfi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="fj5pjgwej"/><path clip-rule="evenodd" class="d0kd7jw0a"/><path clip-rule="evenodd" class="ysy17awtw"/><path class="mezav531a"/><path clip-rule="evenodd" class="qy-1xec4t"/><path clip-rule="evenodd" class="i6uwe5bfi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-tongue-silly-outline"} {...others} />);
}

export default Component;
