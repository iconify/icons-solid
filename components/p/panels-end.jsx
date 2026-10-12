import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gtt0c5_0k.css';
import '../../css/o/o45e4rbgi.css';
import '../../css/o/oor0nsbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="gtt0c5_0k"/><rect class="o45e4rbgi"/><path class="oor0nsbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panels-end"} {...others} />);
}

export default Component;
