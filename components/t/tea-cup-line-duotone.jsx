import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/au_n9lj7l.css';
import '../../css/z/zyfwq-cof.css';
import '../../css/v/vjzov1blj.css';
import '../../css/n/nlopadc2z.css';
import '../../css/e/eo0ysob7e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="au_n9lj7l"/><path class="zyfwq-cof"/><path class="vjzov1blj"/><path class="nlopadc2z"/><path class="eo0ysob7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tea-cup-line-duotone"} {...others} />);
}

export default Component;
