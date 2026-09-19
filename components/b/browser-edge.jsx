import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vznod2tgq.css';
import '../../css/g/gufa1abqb.css';
import '../../css/i/i_6ts1ome.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="vznod2tgq"/><path class="gufa1abqb"/><path class="i_6ts1ome"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:browser-edge"} {...others} />);
}

export default Component;
