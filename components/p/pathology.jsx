import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sll1r44eb.css';
import '../../css/m/mr5-0kkhw.css';
import '../../css/c/cz6_nbepy.css';
import '../../css/p/pvctzfblt.css';

const viewBox = {"width":63,"height":64};
const content = `<path class="sll1r44eb"/><path class="mr5-0kkhw"/><path class="cz6_nbepy"/><path class="pvctzfblt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:pathology"} {...others} />);
}

export default Component;
