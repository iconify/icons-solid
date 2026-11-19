import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m15x6e6na.css';
import '../../css/k/knxlbdceq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m15x6e6na"/><path class="knxlbdceq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:xbull"} {...others} />);
}

export default Component;
