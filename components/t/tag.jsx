import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/d/dxo9gcc2c.css';
import '../../css/v/vuzzcu2xv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="dxo9gcc2c"/><path class="vuzzcu2xv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:tag"} {...others} />);
}

export default Component;
