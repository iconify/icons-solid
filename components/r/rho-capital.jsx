import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qb0u65bbb.css';
import '../../css/s/szy6p58ut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="qb0u65bbb"/><path class="szy6p58ut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:rho-capital"} {...others} />);
}

export default Component;
