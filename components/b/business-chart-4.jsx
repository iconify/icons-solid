import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ynz-wjbfo.css';
import '../../css/n/n7b68mqdf.css';
import '../../css/g/gp-xb9bbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ynz-wjbfo"/><path class="n7b68mqdf"/><path class="gp-xb9bbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:business-chart-4"} {...others} />);
}

export default Component;
