import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z30jtdcxy.css';
import '../../css/p/pb1-vhi0c.css';
import '../../css/a/a1btc6b-m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="z30jtdcxy"/><path class="pb1-vhi0c"/><path clip-rule="evenodd" class="a1btc6b-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:baby-0306m"} {...others} />);
}

export default Component;
