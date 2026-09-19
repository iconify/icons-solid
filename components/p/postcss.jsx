import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm5cl11de.css';
import '../../css/c/cc7ygfb5j.css';
import '../../css/l/ljikcn5lw.css';
import '../../css/d/dz18mgexq.css';
import '../../css/g/gnxoapbgo.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="xm5cl11de"><path class="cc7ygfb5j"/><path class="ljikcn5lw"/><path class="dz18mgexq"/><path class="gnxoapbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:postcss"} {...others} />);
}

export default Component;
