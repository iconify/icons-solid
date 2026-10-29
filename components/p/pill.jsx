import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z82per43e.css';
import '../../css/f/fn11ombyz.css';
import '../../css/a/avx5ugbbq.css';
import '../../css/v/vu90ggenp.css';
import '../../css/d/d-u4543tf.css';
import '../../css/l/lsxx1vb0u.css';
import '../../css/j/ju6712rfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k z82per43e"/><path class="fn11ombyz wm-k"/><path class="avx5ugbbq wm-k"/><path class="vu90ggenp wm-a"/><path class="d-u4543tf wm-a"/><path class="lsxx1vb0u wm-a"/><path class="ju6712rfh wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:pill"} {...others} />);
}

export default Component;
