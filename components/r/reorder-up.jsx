import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-3atbv6d.css';
import '../../css/y/y86aejmpm.css';
import '../../css/p/p_3bslbga.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v-3atbv6d"/><path class="y86aejmpm"/><path class="p_3bslbga"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:reorder-up"} {...others} />);
}

export default Component;
