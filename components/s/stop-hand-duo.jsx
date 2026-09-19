import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbpwkjbhg.css';
import '../../css/z/zl5vibc-e.css';
import '../../css/w/w_zq_p_pm.css';
import '../../css/e/e8-anrbda.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="gbpwkjbhg"/><path class="zl5vibc-e"/><path class="w_zq_p_pm"/><path class="e8-anrbda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stop-hand-duo"} {...others} />);
}

export default Component;
