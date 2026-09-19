import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ff1hwzhkw.css';
import '../../css/v/vkwyhbckz.css';
import '../../css/k/kwe4m4bpm.css';
import '../../css/h/hdj7oy1nu.css';
import '../../css/w/wmaw7upmw.css';
import '../../css/k/k1zm7zbik.css';
import '../../css/y/ynu9vqhsq.css';
import '../../css/e/ecm6i2bli.css';
import '../../css/j/j00h9bc7r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ff1hwzhkw"/><path class="vkwyhbckz"/><path class="kwe4m4bpm"/><path class="hdj7oy1nu"/><path class="wmaw7upmw"/><path class="k1zm7zbik"/><path class="ynu9vqhsq"/><path class="ecm6i2bli"/><path class="j00h9bc7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:stuffed-flatbread"} {...others} />);
}

export default Component;
