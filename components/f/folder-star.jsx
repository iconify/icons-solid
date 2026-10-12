import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ee4bl_c2c.css';
import '../../css/o/owyzcp85d.css';
import '../../css/k/ktvvyzbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ee4bl_c2c"/><path class="owyzcp85d"/><path class="ktvvyzbkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:folder-star"} {...others} />);
}

export default Component;
