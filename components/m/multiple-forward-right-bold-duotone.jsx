import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytjd3_bxd.css';
import '../../css/r/rj2mhcbor.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ytjd3_bxd"/><path clip-rule="evenodd" class="rj2mhcbor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:multiple-forward-right-bold-duotone"} {...others} />);
}

export default Component;
