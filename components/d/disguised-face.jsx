import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jnd9-ne4y.css';
import '../../css/r/rej93qb9h.css';
import '../../css/s/seoaybclg.css';
import '../../css/i/ikrjhk9fn.css';
import '../../css/u/u6xiebcrd.css';
import '../../css/o/oryupyb4m.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="jnd9-ne4y"/><path class="rej93qb9h"/><path class="seoaybclg"/><path class="ikrjhk9fn"/><path class="u6xiebcrd"/><path class="oryupyb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:disguised-face"} {...others} />);
}

export default Component;
