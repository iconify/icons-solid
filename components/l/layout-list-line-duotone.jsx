import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecr98fbsm.css';
import '../../css/b/bv79nub_u.css';
import '../../css/y/yxai8l1jn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ecr98fbsm"/><path class="bv79nub_u"/><path class="yxai8l1jn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layout-list-line-duotone"} {...others} />);
}

export default Component;
