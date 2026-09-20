import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifp3-ac9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifp3-ac9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:pilcrow-left"} {...others} />);
}

export default Component;
