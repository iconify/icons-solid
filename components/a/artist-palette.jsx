import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v6qwsy-jo.css';
import '../../css/p/pzipb6ixt.css';
import '../../css/g/gk74kzy9g.css';
import '../../css/o/odvyypb7e.css';
import '../../css/f/fod3o5b6g.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="v6qwsy-jo"/><path class="pzipb6ixt"/><path class="gk74kzy9g"/><path class="odvyypb7e"/><path class="fod3o5b6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:artist-palette"} {...others} />);
}

export default Component;
