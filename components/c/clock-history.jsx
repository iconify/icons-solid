import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u6yb07oyv.css';
import '../../css/x/xok_n9bbo.css';
import '../../css/n/nc18fzb9i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="u6yb07oyv"/><path class="xok_n9bbo"/><path class="nc18fzb9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:clock-history"} {...others} />);
}

export default Component;
