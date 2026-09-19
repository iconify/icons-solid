import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2ils884q.css';
import '../../css/o/ogyf_ipgy.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="j2ils884q"/><path class="ogyf_ipgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cucumber"} {...others} />);
}

export default Component;
