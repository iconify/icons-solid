import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hi_3yte4a.css';
import '../../css/q/qqbau88aq.css';
import '../../css/a/ag75s1cpg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hi_3yte4a"/><path clip-rule="evenodd" class="qqbau88aq"/><path class="ag75s1cpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:dairy2x-outline"} {...others} />);
}

export default Component;
