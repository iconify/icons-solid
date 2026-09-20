import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yejbj_b4f.css';
import '../../css/c/cay-wqb7i.css';
import '../../css/r/rgjoz0b0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yejbj_b4f"/><path class="cay-wqb7i"/><path class="rgjoz0b0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:notification-bell-minus"} {...others} />);
}

export default Component;
