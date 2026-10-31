import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k2k6wrbli.css';
import '../../css/u/uk4liwe1r.css';
import '../../css/b/b572__8fz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="k2k6wrbli wm-k"/><path class="uk4liwe1r wm-a"/><path class="b572__8fz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:contactless"} {...others} />);
}

export default Component;
