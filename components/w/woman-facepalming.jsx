import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pod1i76rs.css';
import '../../css/o/o1_79_b4t.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="pod1i76rs"/><path class="o1_79_b4t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:woman-facepalming"} {...others} />);
}

export default Component;
