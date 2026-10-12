import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x8br9cg5d.css';
import '../../css/g/gip_tyhye.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x8br9cg5d"/><path class="gip_tyhye"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sd-card-x"} {...others} />);
}

export default Component;
