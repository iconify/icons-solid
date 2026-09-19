import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sap3gob0u.css';
import '../../css/m/m87rrbbex.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sap3gob0u"/><path class="m87rrbbex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mp-301"} {...others} />);
}

export default Component;
