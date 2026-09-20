import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/z/zoorezb6s.css';
import '../../css/b/bnwz5hb0n.css';
import '../../css/e/ekw553btw.css';
import '../../css/l/lxtu9994q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="zoorezb6s"/><path class="bnwz5hb0n"/><path class="ekw553btw"/><path class="lxtu9994q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:fire-wall"} {...others} />);
}

export default Component;
