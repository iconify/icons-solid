import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dze_mvbmy.css';
import '../../css/b/b4dudsbcs.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="dze_mvbmy"/><path class="b4dudsbcs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-high-contrast:baby-bottle"} {...others} />);
}

export default Component;
