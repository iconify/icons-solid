import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/d/d30aez8nr.css';
import '../../css/x/xij1iob8t.css';
import '../../css/v/vjydmy47l.css';
import '../../css/k/kunkzfb7p.css';
import '../../css/o/oe1d-srie.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ufeehvblu"><path class="d30aez8nr"/><path class="xij1iob8t"/><path class="vjydmy47l"/><rect class="kunkzfb7p"/><path class="oe1d-srie"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:gift"} {...others} />);
}

export default Component;
