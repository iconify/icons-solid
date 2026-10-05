import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s4uk_ibbx.css';
import '../../css/v/vu2z3zbex.css';
import '../../css/d/dm-ajb7yk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="s4uk_ibbx"/><path class="vu2z3zbex"/><path class="dm-ajb7yk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:printer"} {...others} />);
}

export default Component;
