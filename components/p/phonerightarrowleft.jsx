import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ud9jybbzp.css';
import '../../css/n/ngdudms9p.css';
import '../../css/p/p2f6vbcce.css';
import '../../css/j/jqkredbmz.css';
import '../../css/z/ztkrvpbnj.css';
import '../../css/z/zjyyu7xch.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ud9jybbzp"/><path class="ngdudms9p"/><path class="p2f6vbcce"/><path class="jqkredbmz"/><path class="ztkrvpbnj"/><path class="zjyyu7xch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:phonerightarrowleft"} {...others} />);
}

export default Component;
