import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lai74vgfz.css';
import '../../css/a/awqyshz6y.css';
import '../../css/u/u39-9ib-u.css';
import '../../css/d/dvrop9byz.css';
import '../../css/y/ywfc_z2mj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="lai74vgfz"/><path class="awqyshz6y"/><path class="u39-9ib-u"/><path class="dvrop9byz"/><circle class="ywfc_z2mj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mouse-right-click-05"} {...others} />);
}

export default Component;
