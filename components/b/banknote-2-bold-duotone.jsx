import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ohgw9tnbi.css';
import '../../css/t/t_3s3mbhh.css';
import '../../css/g/gxyr9cctr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ohgw9tnbi"/><path clip-rule="evenodd" class="t_3s3mbhh"/><path class="gxyr9cctr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-2-bold-duotone"} {...others} />);
}

export default Component;
