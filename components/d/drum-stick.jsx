import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/bxx7e7o4e.css';
import '../../css/l/l36e_zb9c.css';
import '../../css/b/bi1vd9t4u.css';
import '../../css/y/yzaaxlb_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="bxx7e7o4e"/><path class="l36e_zb9c"/><path class="bi1vd9t4u"/><path class="yzaaxlb_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:drum-stick"} {...others} />);
}

export default Component;
