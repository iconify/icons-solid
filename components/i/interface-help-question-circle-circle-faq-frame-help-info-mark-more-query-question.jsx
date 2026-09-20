import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i0tuhogfj.css';
import '../../css/v/v4jwiishd.css';
import '../../css/z/zcx5a3i1q.css';

const viewBox = {"width":14,"height":14};
const content = `<circle class="i0tuhogfj"/><path class="v4jwiishd"/><path class="zcx5a3i1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-help-question-circle-circle-faq-frame-help-info-mark-more-query-question"} {...others} />);
}

export default Component;
