import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/meyfvxbup.css';
import '../../css/b/ba6q5sn1q.css';
import '../../css/b/b7fd3hbhl.css';
import '../../css/r/rcu-dxg4m.css';
import '../../css/k/kqpvbv78p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="meyfvxbup"/><path class="ba6q5sn1q"/><path class="b7fd3hbhl"/><path class="rcu-dxg4m"/><path class="kqpvbv78p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dumbbell-large-minimalistic-broken"} {...others} />);
}

export default Component;
