import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m6fcf8xge.css';
import '../../css/p/pjrhhab_o.css';
import '../../css/h/h4yzg0-cc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m6fcf8xge"/><path class="pjrhhab_o"/><path class="h4yzg0-cc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:customer-relationship-management-lead-management-1"} {...others} />);
}

export default Component;
