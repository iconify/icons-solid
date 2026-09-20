import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pbey_ib_d.css';
import '../../css/w/wid62-bcc.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/u/u1gdy3bvt.css';
import '../../css/y/y96dlxsxv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pbey_ib_d"/><path class="wid62-bcc"/><g class="brzn_0bpr"><path class="u1gdy3bvt"/><path class="y96dlxsxv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cup-with-straw"} {...others} />);
}

export default Component;
