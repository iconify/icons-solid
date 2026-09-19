import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/x/xc0ukmu8r.css';
import '../../css/q/qgfu9slmj.css';
import '../../css/g/g1tm12z0p.css';
import '../../css/j/jjsq0e7nx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><circle class="xc0ukmu8r"/><path class="qgfu9slmj"/><path class="g1tm12z0p"/><path class="jjsq0e7nx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:font-search"} {...others} />);
}

export default Component;
