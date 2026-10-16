import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptizy_zew.css';
import '../../css/u/u-8r7_bwc.css';
import '../../css/u/usgixfbzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ptizy_zew"/><path class="u-8r7_bwc"/><path class="usgixfbzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:settlement-20-bold"} {...others} />);
}

export default Component;
