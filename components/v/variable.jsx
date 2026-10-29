import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plq0nob5f.css';
import '../../css/y/yqtvofv_r.css';
import '../../css/v/v1cjoacvl.css';
import '../../css/c/cx101r0vf.css';
import '../../css/t/t2p5b_1nx.css';
import '../../css/o/owb58bcwa.css';
import '../../css/a/auj7yibah.css';
import '../../css/p/p8qysjx9f.css';
import '../../css/w/w3txgxb_f.css';
import '../../css/c/c31s1xb0h.css';
import '../../css/e/ekejp07at.css';
import '../../css/z/z88fzebra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="plq0nob5f wm-shadow"/><path class="wm-k yqtvofv_r"/><path class="v1cjoacvl wm-k"/><path class="cx101r0vf wm-k"/><path class="t2p5b_1nx wm-k"/><path class="owb58bcwa wm-shine"/><path class="auj7yibah wm-a"/><path class="p8qysjx9f wm-a"/><path class="w3txgxb_f wm-a"/><path class="c31s1xb0h wm-a"/><path class="ekejp07at wm-a"/><path class="wm-a z88fzebra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:variable"} {...others} />);
}

export default Component;
