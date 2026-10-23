import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/z2u84ac3q.css';
import '../../css/t/tyzf8r-xo.css';
import '../../css/h/h1fg3fbmj.css';
import '../../css/m/mhv6zkb6v.css';
import '../../css/t/tg6n9uw4h.css';
import '../../css/r/rvesqpb8b.css';
import '../../css/w/wp-91tbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="z2u84ac3q"/><path class="tyzf8r-xo"/><path class="h1fg3fbmj"/><path class="mhv6zkb6v"/><path class="tg6n9uw4h"/><path class="rvesqpb8b"/><path class="wp-91tbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:pipette"} {...others} />);
}

export default Component;
