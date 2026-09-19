import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/e/eptqnp95c.css';
import '../../css/j/j9qe56bhi.css';
import '../../css/m/m3ykmcy1q.css';
import '../../css/y/yjl1c1boa.css';
import '../../css/j/j73mfxbcw.css';
import '../../css/a/a9bp5w-wm.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="eptqnp95c"/><rect class="j9qe56bhi"/><rect class="m3ykmcy1q"/><rect class="yjl1c1boa"/><rect class="j73mfxbcw"/><path class="a9bp5w-wm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:anchor"} {...others} />);
}

export default Component;
