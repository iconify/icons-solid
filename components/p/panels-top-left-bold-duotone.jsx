import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hao-y3_km.css';
import '../../css/c/csp4cxb4v.css';
import '../../css/p/ptrg_gs-t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hao-y3_km"/><path class="csp4cxb4v"/><path class="ptrg_gs-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-top-left-bold-duotone"} {...others} />);
}

export default Component;
