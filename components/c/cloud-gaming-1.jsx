import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1qcbo17t.css';
import '../../css/p/p7-x1b1cr.css';
import '../../css/m/md_pd-bda.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="h1qcbo17t"/><path class="p7-x1b1cr"/><path class="md_pd-bda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cloud-gaming-1"} {...others} />);
}

export default Component;
