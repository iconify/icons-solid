import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/flv_itj1h.css';
import '../../css/s/sb3ejhbzu.css';
import '../../css/c/czs7wwqzy.css';
import '../../css/s/slu4csbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="flv_itj1h"/><path class="sb3ejhbzu wm-k"/><path class="czs7wwqzy wm-a"/><path class="slu4csbtz wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bat"} {...others} />);
}

export default Component;
