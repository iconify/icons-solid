import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bneat_bfb.css';
import '../../css/e/erad_ystc.css';
import '../../css/b/bpvvrccfu.css';
import '../../css/l/l6dak_7zy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="bneat_bfb"/><path class="erad_ystc"/><path class="bpvvrccfu"/><path class="l6dak_7zy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bug"} {...others} />);
}

export default Component;
