import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/t/tm40wxbko.css';
import '../../css/p/pmzx7qbms.css';
import '../../css/x/x_71-s_ta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="tm40wxbko"/><path class="pmzx7qbms"/><path class="x_71-s_ta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:beta"} {...others} />);
}

export default Component;
