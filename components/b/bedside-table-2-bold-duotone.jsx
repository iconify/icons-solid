import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5k33wnun.css';
import '../../css/z/zmr_0im2r.css';
import '../../css/l/laypnctxv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="s5k33wnun"/><path class="zmr_0im2r"/><path clip-rule="evenodd" class="laypnctxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bedside-table-2-bold-duotone"} {...others} />);
}

export default Component;
