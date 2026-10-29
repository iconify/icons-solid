import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk8cedbyd.css';
import '../../css/f/f-6_-wbio.css';
import '../../css/z/z8h6eomtl.css';
import '../../css/d/drxebhhif.css';
import '../../css/d/d_mqpsoym.css';
import '../../css/b/b6ayu2pfm.css';
import '../../css/l/lyyz5kb6u.css';
import '../../css/p/pz8k_kb_t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fk8cedbyd wm-shadow"/><path class="f-6_-wbio wm-k"/><path class="wm-k z8h6eomtl"/><path class="drxebhhif wm-a"/><path class="d_mqpsoym wm-a"/><path class="b6ayu2pfm wm-a"/><path class="lyyz5kb6u wm-a"/><path class="pz8k_kb_t wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:list-todo"} {...others} />);
}

export default Component;
