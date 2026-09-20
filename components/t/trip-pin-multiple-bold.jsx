import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw3b_777n.css';
import '../../css/s/s6mui_bce.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bw3b_777n"/><path class="s6mui_bce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:trip-pin-multiple-bold"} {...others} />);
}

export default Component;
