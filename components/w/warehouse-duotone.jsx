import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/btqnwwboa.css';
import '../../css/d/dpngoeqse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="btqnwwboa secondary"/><path class="dpngoeqse primary"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:warehouse-duotone"} {...others} />);
}

export default Component;
