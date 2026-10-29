import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l3344obdr.css';
import '../../css/z/zv59245nm.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/a/afnjd3buc.css';
import '../../css/u/uybh1rwva.css';
import '../../css/k/ky9oie8yz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="l3344obdr wm-deco"/><path class="wm-deco zv59245nm"/><path class="cf3uzcrzx wm-deco"/><path class="afnjd3buc wm-k"/><path class="uybh1rwva wm-a"/><path class="ky9oie8yz wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paste-blueprint"} {...others} />);
}

export default Component;
