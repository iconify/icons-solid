import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fed5n4npn.css';
import '../../css/v/vslz5yb3q.css';
import '../../css/g/ggatqdb-v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fed5n4npn wm-k"/><path class="vslz5yb3q wm-a"/><path class="ggatqdb-v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:heading"} {...others} />);
}

export default Component;
