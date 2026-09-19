import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/r/ri_106bdd.css';
import '../../css/b/b6w1e6bkw.css';
import '../../css/t/te0_flb6z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="ri_106bdd"/><path class="b6w1e6bkw"/><path class="te0_flb6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:mitsubishi"} {...others} />);
}

export default Component;
