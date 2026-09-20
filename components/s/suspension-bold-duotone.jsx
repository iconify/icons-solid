import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ral4dpmfu.css';
import '../../css/p/pf4pa1bsm.css';
import '../../css/b/b9gesmbow.css';
import '../../css/r/rapb4wc6p.css';
import '../../css/j/j0wjv4bfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ral4dpmfu"/><path class="pf4pa1bsm"/><path class="b9gesmbow"/><path class="rapb4wc6p"/><path class="j0wjv4bfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-bold-duotone"} {...others} />);
}

export default Component;
