import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4khs4b9v.css';
import '../../css/w/wu2vxvbra.css';
import '../../css/t/tf80cil7l.css';
import '../../css/v/vi4f9i4vu.css';
import '../../css/n/n7di3rbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w4khs4b9v"/><path class="wu2vxvbra"/><path class="tf80cil7l"/><path class="vi4f9i4vu"/><path class="n7di3rbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:currency-pound-decrease"} {...others} />);
}

export default Component;
