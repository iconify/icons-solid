import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lacu5d_xy.css';
import '../../css/m/md286fbip.css';
import '../../css/j/jjtuc-t1o.css';
import '../../css/p/p9xjhsbce.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="lacu5d_xy"/><g class="md286fbip"><path class="jjtuc-t1o"/><path class="p9xjhsbce"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:neu"} {...others} />);
}

export default Component;
