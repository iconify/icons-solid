import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/a/amb0gmzjv.css';
import '../../css/e/erz88qkfp.css';
import '../../css/o/o6vxszbzk.css';
import '../../css/l/l04zt6bmq.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="amb0gmzjv"/><path class="erz88qkfp"/><path class="o6vxszbzk"/><path class="l04zt6bmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:grill-bbq"} {...others} />);
}

export default Component;
