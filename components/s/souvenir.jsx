import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zehoe_gcu.css';
import '../../css/g/g1mibkuwk.css';
import '../../css/c/cnqvfwedj.css';
import '../../css/i/id79lg_aq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="zehoe_gcu"/><path class="g1mibkuwk"/><path class="cnqvfwedj"/><path class="id79lg_aq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:souvenir"} {...others} />);
}

export default Component;
