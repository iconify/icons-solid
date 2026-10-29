import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahothofcj.css';
import '../../css/s/s48yuhnty.css';
import '../../css/l/l853xhydn.css';
import '../../css/p/patblujog.css';
import '../../css/r/rexgkurbm.css';
import '../../css/f/fnh-py-bx.css';
import '../../css/e/ecwr_s_-a.css';
import '../../css/j/j4me2mdru.css';
import '../../css/d/d5tugtbua.css';
import '../../css/n/nd30gkfpl.css';
import '../../css/m/mlbb2pbst.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahothofcj wm-shadow"/><path class="s48yuhnty wm-k"/><path class="l853xhydn wm-k"/><path class="patblujog wm-k"/><path class="rexgkurbm wm-k"/><path class="fnh-py-bx wm-k"/><path class="ecwr_s_-a wm-shine"/><path class="j4me2mdru wm-a"/><path class="d5tugtbua wm-k"/><path class="nd30gkfpl wm-k"/><path class="mlbb2pbst wm-deco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:flask-conical"} {...others} />);
}

export default Component;
