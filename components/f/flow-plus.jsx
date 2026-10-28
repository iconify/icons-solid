import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bepp79b9p.css';
import '../../css/v/vmd0f70rp.css';
import '../../css/g/gtrbizr6q.css';
import '../../css/s/sokv8cbee.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bepp79b9p"/><path class="vmd0f70rp"/><circle class="gtrbizr6q"/><path class="sokv8cbee"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:flow-plus"} {...others} />);
}

export default Component;
