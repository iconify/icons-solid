import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bt2s4pbvn.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/d/dabaijbqi.css';
import '../../css/g/go3ojebxo.css';
import '../../css/s/st_8ncf7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bt2s4pbvn wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="dabaijbqi wm-k"/><path class="go3ojebxo wm-a"/><path class="st_8ncf7j wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sd-card-blueprint"} {...others} />);
}

export default Component;
