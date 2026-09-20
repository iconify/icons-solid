import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/exvhs1b_r.css';
import '../../css/k/klb_tkdzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="exvhs1b_r"/><path clip-rule="evenodd" class="klb_tkdzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:router-modem-fill"} {...others} />);
}

export default Component;
