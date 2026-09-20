import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mpr19ccyx.css';
import '../../css/o/ox2f6xb_t.css';
import '../../css/c/cjd1zynuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mpr19ccyx"/><path class="ox2f6xb_t"/><path class="cjd1zynuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:education"} {...others} />);
}

export default Component;
