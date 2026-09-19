import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/ezgrq_b8g.css';
import '../../css/o/ozw_qtvty.css';
import '../../css/e/emhb2rakv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="ezgrq_b8g"/><circle class="ozw_qtvty"/><path class="emhb2rakv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:scooter-electric"} {...others} />);
}

export default Component;
