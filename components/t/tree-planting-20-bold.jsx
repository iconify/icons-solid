import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqcchmb8c.css';
import '../../css/y/ymqda_bxj.css';
import '../../css/b/bufykz6nv.css';
import '../../css/z/zgtxh_b8y.css';
import '../../css/o/o-b6_hbnr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="oqcchmb8c"/><path class="ymqda_bxj"/><path class="bufykz6nv"/><path class="zgtxh_b8y"/><path class="o-b6_hbnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tree-planting-20-bold"} {...others} />);
}

export default Component;
