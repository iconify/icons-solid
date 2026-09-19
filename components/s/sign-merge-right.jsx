import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o6truac_g.css';
import '../../css/t/txfnowbse.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="o6truac_g"/><path class="txfnowbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-merge-right"} {...others} />);
}

export default Component;
