import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/uokp1hb7l.css';
import '../../css/o/o8t6onbpn.css';
import '../../css/t/tx735kbhs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="uokp1hb7l"/><path class="o8t6onbpn"/></g><path class="tx735kbhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cash-out-bold-duotone"} {...others} />);
}

export default Component;
