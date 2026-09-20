import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/k/ksjxiodpt.css';
import '../../css/g/gughkpbfx.css';
import '../../css/b/brggc5baf.css';
import '../../css/o/o5ltvv6jc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="ksjxiodpt"/><path class="gughkpbfx"/><path class="brggc5baf"/><path class="o5ltvv6jc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:maximize-square-2-bold-duotone"} {...others} />);
}

export default Component;
