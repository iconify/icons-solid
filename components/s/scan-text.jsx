import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4gd8vb7g.css';
import '../../css/s/sj9faob_b.css';
import '../../css/c/cjfbb_hqh.css';
import '../../css/n/n_4q9wb-v.css';
import '../../css/q/q_ulf0o5h.css';
import '../../css/o/oflwbs20t.css';
import '../../css/e/e3syf2bjd.css';
import '../../css/m/m8hd9xl-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u4gd8vb7g wm-shadow"/><path class="sj9faob_b wm-k"/><path class="cjfbb_hqh wm-k"/><path class="n_4q9wb-v wm-k"/><path class="q_ulf0o5h wm-k"/><path class="oflwbs20t wm-k"/><path class="e3syf2bjd wm-shine"/><path class="m8hd9xl-z wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:scan-text"} {...others} />);
}

export default Component;
