import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/b/btgjrj04u.css';
import '../../css/r/rxo2zgb6g.css';
import '../../css/h/h7a9wibzd.css';
import '../../css/l/lsx7yjqrf.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="btgjrj04u"/><path class="rxo2zgb6g wm-shine"/><path class="h7a9wibzd wm-k"/><path class="lsx7yjqrf wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:love-lock"} {...others} />);
}

export default Component;
