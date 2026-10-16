import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8o02ibmb.css';
import '../../css/h/hothrybyr.css';
import '../../css/d/d4z3bmbhk.css';
import '../../css/q/qv0kmjbbc.css';
import '../../css/g/gd36tc49i.css';
import '../../css/m/mtyr7rb-w.css';
import '../../css/r/rt8h2uouo.css';
import '../../css/r/r5pzwacqm.css';
import '../../css/w/wcche-7jo.css';
import '../../css/n/nvqfqabqi.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n8o02ibmb"/><path class="hothrybyr"/><path class="d4z3bmbhk"/><path class="qv0kmjbbc"/><path class="gd36tc49i"/><path class="mtyr7rb-w"/><path class="rt8h2uouo"/><path class="r5pzwacqm"/><path class="wcche-7jo"/><path class="nvqfqabqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pelton-wheel-20-bold"} {...others} />);
}

export default Component;
