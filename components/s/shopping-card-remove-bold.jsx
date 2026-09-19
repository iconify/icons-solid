import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/or_1s5gyv.css';
import '../../css/q/ql_kycc5o.css';
import '../../css/s/so4nxo65x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="or_1s5gyv"/><path class="ql_kycc5o"/><path class="so4nxo65x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:shopping-card-remove-bold"} {...others} />);
}

export default Component;
