import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/i/ig1m9d7st.css';
import '../../css/k/khmybxbgv.css';
import '../../css/j/jstsvibwd.css';
import '../../css/n/n8lapqogo.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ig1m9d7st"/><path class="khmybxbgv wm-shine"/><path class="jstsvibwd wm-k"/><path class="n8lapqogo wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:dumpling"} {...others} />);
}

export default Component;
