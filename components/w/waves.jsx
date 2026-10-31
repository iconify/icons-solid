import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/g/grta0fb4t.css';
import '../../css/d/d4oewab_d.css';
import '../../css/j/jif_d_-tx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="grta0fb4t wm-k"/><path class="d4oewab_d wm-a"/><path class="jif_d_-tx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:waves"} {...others} />);
}

export default Component;
