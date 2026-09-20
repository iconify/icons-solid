import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/l/l5twn6bca.css';
import '../../css/n/njjcsznjb.css';
import '../../css/z/zz-yupbln.css';
import '../../css/y/y0m4fiz5a.css';
import '../../css/z/zb7p68j9p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="l5twn6bca"/><path class="njjcsznjb"/><path class="zz-yupbln"/><path class="y0m4fiz5a"/><path class="zb7p68j9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:smartphone"} {...others} />);
}

export default Component;
