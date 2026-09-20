import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_4ft4b5o.css';
import '../../css/j/jnhrwaczb.css';
import '../../css/r/r_tpkwc8v.css';
import '../../css/l/l_2i6leyu.css';
import '../../css/m/mwwopca2t.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o_4ft4b5o"/><path class="jnhrwaczb"/><path class="r_tpkwc8v"/><path class="l_2i6leyu"/><path class="mwwopca2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:upload-box-1"} {...others} />);
}

export default Component;
