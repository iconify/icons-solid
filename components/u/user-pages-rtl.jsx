import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4x3c_beq.css';
import '../../css/k/k8ixw89dy.css';
import '../../css/c/cbp_2nbuo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="n4x3c_beq"/><path class="k8ixw89dy"/><circle class="cbp_2nbuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:user-pages-rtl"} {...others} />);
}

export default Component;
