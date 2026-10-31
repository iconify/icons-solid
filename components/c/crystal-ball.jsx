import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cwvzb2b9j.css';
import '../../css/k/ka7glxb5u.css';
import '../../css/n/ni87pf-_n.css';
import '../../css/t/tukw9ityj.css';
import '../../css/u/ukvhbnbxx.css';
import '../../css/u/u0ss98tgo.css';
import '../../css/k/kspsy0buc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="cwvzb2b9j wm-shadow"/><path class="ka7glxb5u"/><path class="ni87pf-_n"/><path class="tukw9ityj"/><path class="ukvhbnbxx"/><path class="u0ss98tgo wm-s"/><path class="kspsy0buc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:crystal-ball"} {...others} />);
}

export default Component;
