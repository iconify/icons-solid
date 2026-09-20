import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cmc7_aczv.css';
import '../../css/d/d30tv5bpb.css';
import '../../css/s/ssc_8on_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cmc7_aczv"/><path clip-rule="evenodd" class="d30tv5bpb"/><path class="ssc_8on_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:weightlifting-fill"} {...others} />);
}

export default Component;
