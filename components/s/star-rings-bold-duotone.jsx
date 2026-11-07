import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwtm_3btu.css';
import '../../css/m/mdrgupb7j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dwtm_3btu"/><path class="mdrgupb7j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:star-rings-bold-duotone"} {...others} />);
}

export default Component;
