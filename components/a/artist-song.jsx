import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aez3cba_q.css';
import '../../css/p/pq96quw7k.css';
import '../../css/p/pq4fwb32l.css';
import '../../css/a/aismjnbyq.css';
import '../../css/p/pg6zs7_kf.css';
import '../../css/l/llb9k9cmm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aez3cba_q"/><path class="pq96quw7k"/><path class="pq4fwb32l"/><path class="aismjnbyq"/><path class="pg6zs7_kf"/><path class="llb9k9cmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:artist-song"} {...others} />);
}

export default Component;
