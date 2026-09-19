import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ru2oq_b2q.css';
import '../../css/q/qovl6_a4a.css';
import '../../css/z/zqnlvbcth.css';
import '../../css/u/unp9pjbld.css';

const viewBox = {"width":17,"height":16};
const content = `<g transform="translate(1)" class="n1lsf0bnc"><path class="ru2oq_b2q"/><ellipse class="qovl6_a4a"/><ellipse class="zqnlvbcth"/><path class="unp9pjbld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:drum"} {...others} />);
}

export default Component;
