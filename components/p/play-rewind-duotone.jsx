import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7kd-cczz.css';
import '../../css/l/lvinadbtn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r7kd-cczz"/><path class="lvinadbtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:play-rewind-duotone"} {...others} />);
}

export default Component;
