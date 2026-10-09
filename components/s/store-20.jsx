import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/srz9trb8w.css';
import '../../css/q/q7kl_vwvo.css';
import '../../css/p/pw06uvqua.css';
import '../../css/y/ydi-f-b6n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="srz9trb8w"/><path class="q7kl_vwvo"/><path class="pw06uvqua"/><path class="ydi-f-b6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:store-20"} {...others} />);
}

export default Component;
