import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/s/s-7wn7q5o.css';
import '../../css/j/j01vhwb7x.css';
import '../../css/r/rc1zazbnp.css';
import '../../css/o/o_b8tf_8r.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path class="s-7wn7q5o"/><path class="j01vhwb7x"/><path class="rc1zazbnp"/><path class="o_b8tf_8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:unity-dark"} {...others} />);
}

export default Component;
