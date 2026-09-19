import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1_334bfg.css';
import '../../css/n/nb55azqyl.css';
import '../../css/p/puvg98k0x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="f1_334bfg"/><path class="nb55azqyl"/><path class="puvg98k0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:sort-precedence"} {...others} />);
}

export default Component;
