import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl1gw9yva.css';
import '../../css/g/gk_snkblx.css';
import '../../css/i/ifc5sxbuc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sl1gw9yva"/><path class="gk_snkblx"/><circle class="ifc5sxbuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:window-rtl"} {...others} />);
}

export default Component;
