import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/p/pbuyrte-q.css';
import '../../css/l/lxfxqz22f.css';
import '../../css/k/k1cz28t2s.css';
import '../../css/j/jryjw9b6t.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="pbuyrte-q"/><path class="lxfxqz22f"/><path class="k1cz28t2s"/><path class="jryjw9b6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:ios-ipados"} {...others} />);
}

export default Component;
