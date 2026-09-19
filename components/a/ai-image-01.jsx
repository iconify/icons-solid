import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e1m2v8b6w.css';
import '../../css/l/lf62mbcbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e1m2v8b6w"/><path class="lf62mbcbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:ai-image-01"} {...others} />);
}

export default Component;
