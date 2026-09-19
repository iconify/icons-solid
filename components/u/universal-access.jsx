import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wknanbbjf.css';
import '../../css/x/x9hbbzbwd.css';
import '../../css/s/sz0mrrb6a.css';

const viewBox = {"width":100,"height":100};
const content = `<g class="cuyn6tgcc"><path class="wknanbbjf"/><circle class="x9hbbzbwd"/><path class="sz0mrrb6a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:universal-access"} {...others} />);
}

export default Component;
