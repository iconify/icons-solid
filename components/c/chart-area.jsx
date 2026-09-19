import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wyt8hgbsx.css';
import '../../css/i/ib2dn6bwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wyt8hgbsx"/><path class="ib2dn6bwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chart-area"} {...others} />);
}

export default Component;
