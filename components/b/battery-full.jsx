import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ld8w7hb7k.css';
import '../../css/h/hp_ny3_4l.css';
import '../../css/c/cqnbl8q7o.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="ld8w7hb7k"/><rect class="hp_ny3_4l"/><path class="cqnbl8q7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:battery-full"} {...others} />);
}

export default Component;
