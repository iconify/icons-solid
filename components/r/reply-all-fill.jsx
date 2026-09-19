import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4imabb4j.css';
import '../../css/t/t_c-r3b-n.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="b4imabb4j"/><path class="t_c-r3b-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:reply-all-fill"} {...others} />);
}

export default Component;
