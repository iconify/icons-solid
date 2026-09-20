import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x7u_jr25u.css';
import '../../css/c/cg677o3fu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x7u_jr25u"/><path class="cg677o3fu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:transfer-horizontal-broken"} {...others} />);
}

export default Component;
