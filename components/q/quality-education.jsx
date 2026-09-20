import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vgaqapt1k.css';
import '../../css/s/sdz0wnp4t.css';
import '../../css/l/lpkatcc-r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vgaqapt1k"/><path class="sdz0wnp4t"/><path class="lpkatcc-r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:quality-education"} {...others} />);
}

export default Component;
