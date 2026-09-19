import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_45fb3ek.css';
import '../../css/n/nyl59rfbs.css';
import '../../css/j/jitkztbnx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><circle class="o_45fb3ek"/><circle class="nyl59rfbs"/><circle class="jitkztbnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:overflow-stroke-16"} {...others} />);
}

export default Component;
