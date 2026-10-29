import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is_le4bjc.css';
import '../../css/c/ckm1-ln1t.css';
import '../../css/f/f00dsbw3n.css';
import '../../css/v/v54wd1qdp.css';
import '../../css/i/i49_cz9sm.css';
import '../../css/l/l30nxubtd.css';
import '../../css/f/fm5gmibbe.css';
import '../../css/c/c76bjqbjz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="is_le4bjc wm-shadow"/><path class="ckm1-ln1t wm-k"/><path class="f00dsbw3n wm-k"/><path class="v54wd1qdp wm-k"/><path class="i49_cz9sm wm-k"/><path class="l30nxubtd wm-k"/><path class="fm5gmibbe wm-shine"/><path class="c76bjqbjz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:square-plus"} {...others} />);
}

export default Component;
