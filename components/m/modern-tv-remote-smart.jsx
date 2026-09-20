import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxz-4y3ba.css';
import '../../css/v/vilwqnbnm.css';
import '../../css/p/pwnix680q.css';
import '../../css/v/v44149o-j.css';
import '../../css/a/aceuk1bvz.css';
import '../../css/f/fj0ad9poi.css';
import '../../css/p/pnd-hib6j.css';
import '../../css/z/zn01qf9vs.css';
import '../../css/b/b9t54iwyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lxz-4y3ba"/><path class="vilwqnbnm"/><path class="pwnix680q"/><path class="v44149o-j"/><path class="aceuk1bvz"/><path class="fj0ad9poi"/><path class="pnd-hib6j"/><path class="zn01qf9vs"/><path class="b9t54iwyz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:modern-tv-remote-smart"} {...others} />);
}

export default Component;
