import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/v/vzu1opg_x.css';
import '../../css/y/y9w4d7b2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="vzu1opg_x"/><path class="y9w4d7b2o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:corner-left-down"} {...others} />);
}

export default Component;
