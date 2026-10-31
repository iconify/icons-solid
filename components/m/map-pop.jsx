import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0c_ah97o.css';
import '../../css/a/ao54odt3u.css';
import '../../css/j/j4qvigbwi.css';
import '../../css/p/pvi46g6zw.css';
import '../../css/n/n-xmf2b7h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="b0c_ah97o"/><path class="ao54odt3u"/><path class="j4qvigbwi"/><path class="pvi46g6zw"/><path class="n-xmf2b7h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:map-pop"} {...others} />);
}

export default Component;
