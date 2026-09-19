import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rxybk_snf.css';
import '../../css/o/o_3gp2byq.css';
import '../../css/j/j8g-7sb1w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rxybk_snf"/><path class="o_3gp2byq"/><path class="j8g-7sb1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:rightwards-pushing-hand-medium"} {...others} />);
}

export default Component;
