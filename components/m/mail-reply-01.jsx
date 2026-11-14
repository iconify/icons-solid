import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wo2mc-qtj.css';
import '../../css/e/eopj_5x7f.css';
import '../../css/p/pkxsu9bpr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wo2mc-qtj"/><path class="eopj_5x7f"/><path class="pkxsu9bpr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-reply-01"} {...others} />);
}

export default Component;
