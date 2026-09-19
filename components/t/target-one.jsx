import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vampogb5i.css';
import '../../css/u/ulwkycb9s.css';
import '../../css/p/pic-il9ab.css';
import '../../css/w/wjm02hb-p.css';
import '../../css/o/oh1ldeb6j.css';
import '../../css/e/ejpfm5j3s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vampogb5i"/><path class="ulwkycb9s"/><path class="pic-il9ab"/><path class="wjm02hb-p"/><path class="oh1ldeb6j"/><path class="ejpfm5j3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:target-one"} {...others} />);
}

export default Component;
