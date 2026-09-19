import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/njrtzgfnc.css';
import '../../css/s/slwp9yb5h.css';
import '../../css/k/klebjebfq.css';

const viewBox = {"width":12,"height":12};
const content = `<g class="cuyn6tgcc"><circle class="njrtzgfnc"/><circle class="slwp9yb5h"/><circle class="klebjebfq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:overflow-fill-12"} {...others} />);
}

export default Component;
