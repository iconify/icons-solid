import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o_0vx1b5k.css';
import '../../css/q/qotpv-byw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o_0vx1b5k"/><path class="qotpv-byw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-missed-01"} {...others} />);
}

export default Component;
