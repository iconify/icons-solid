import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ytnngga1j.css';
import '../../css/m/mes-g5e4o.css';
import '../../css/y/yv7x1u4nv.css';
import '../../css/a/as9mh7ybn.css';
import '../../css/o/okj77319v.css';
import '../../css/b/bsz2fsbqp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ytnngga1j"/><path class="mes-g5e4o"/><path clip-rule="evenodd" class="yv7x1u4nv"/><path class="as9mh7ybn"/><path class="okj77319v"/><path clip-rule="evenodd" class="bsz2fsbqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:chair-4-duo"} {...others} />);
}

export default Component;
