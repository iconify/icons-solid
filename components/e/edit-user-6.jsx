import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/c/c6g_g9i_s.css';
import '../../css/p/puk478b4i.css';
import '../../css/g/gc9e2dbal.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="c6g_g9i_s"/><path class="puk478b4i"/><path class="gc9e2dbal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:edit-user-6"} {...others} />);
}

export default Component;
