import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xibxme48y.css';
import '../../css/p/pyo64viyh.css';
import '../../css/n/nk_swmbkl.css';
import '../../css/s/szxjw4bwp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xibxme48y"/><path class="pyo64viyh"/><path class="nk_swmbkl"/><path class="szxjw4bwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:curtailment-20"} {...others} />);
}

export default Component;
