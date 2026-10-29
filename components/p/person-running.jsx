import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxt3iabni.css';
import '../../css/f/f2jp1qy9g.css';
import '../../css/d/dgadyzbtm.css';
import '../../css/b/bhqh6lnzh.css';
import '../../css/j/jgn09lmpk.css';
import '../../css/k/ki4hidc1u.css';
import '../../css/e/edjsq3z7i.css';
import '../../css/w/w56q5x6nv.css';
import '../../css/h/hmy4icbiu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vxt3iabni wm-shadow"/><path class="f2jp1qy9g wm-k"/><path class="dgadyzbtm wm-k"/><path class="bhqh6lnzh wm-k"/><path class="jgn09lmpk wm-k"/><path class="ki4hidc1u wm-k"/><path class="edjsq3z7i wm-shine"/><path class="w56q5x6nv wm-a"/><path class="hmy4icbiu wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:person-running"} {...others} />);
}

export default Component;
