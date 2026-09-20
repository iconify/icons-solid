import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pjiztkldl.css';
import '../../css/r/rwmnp2bmg.css';
import '../../css/r/r057cwbhu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pjiztkldl"/><path class="rwmnp2bmg"/><circle class="r057cwbhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:notification-bell-pending"} {...others} />);
}

export default Component;
