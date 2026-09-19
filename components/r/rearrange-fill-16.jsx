import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xz6d5opni.css';
import '../../css/t/trnmlvb1m.css';
import '../../css/s/sq7kakbys.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><rect class="xz6d5opni"/><rect class="trnmlvb1m"/><rect class="sq7kakbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:rearrange-fill-16"} {...others} />);
}

export default Component;
