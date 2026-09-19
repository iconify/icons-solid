import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cn3yljbjm.css';
import '../../css/i/i6uv60y3t.css';
import '../../css/u/u0zyu677r.css';
import '../../css/b/bybf8xbik.css';
import '../../css/b/bzwukfgni.css';
import '../../css/v/va3jbbcyp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><rect class="cn3yljbjm"/><circle class="i6uv60y3t"/><circle class="u0zyu677r"/><path class="bybf8xbik"/><path class="bzwukfgni"/><circle class="va3jbbcyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:robot-one"} {...others} />);
}

export default Component;
