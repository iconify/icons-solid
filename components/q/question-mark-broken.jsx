import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jbz4_mzqr.css';
import '../../css/t/tyv5mcb3q.css';
import '../../css/j/j9lqcdb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="jbz4_mzqr"/><path class="tyv5mcb3q"/><path class="j9lqcdb9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:question-mark-broken"} {...others} />);
}

export default Component;
