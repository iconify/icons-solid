import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kkf8qty-z.css';
import '../../css/v/vesdzd76m.css';
import '../../css/d/d3q31ibwf.css';
import '../../css/j/jn0tgzb0v.css';
import '../../css/s/svm6icbxq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="kkf8qty-z"/><path class="vesdzd76m"/><path class="d3q31ibwf"/><path class="jn0tgzb0v"/><path class="svm6icbxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:tiger"} {...others} />);
}

export default Component;
