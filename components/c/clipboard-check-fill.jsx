import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mq3tvbcci.css';
import '../../css/z/zgbi3fbuo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="mq3tvbcci"/><path class="zgbi3fbuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:clipboard-check-fill"} {...others} />);
}

export default Component;
