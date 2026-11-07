import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x-k_gnknn.css';
import '../../css/h/hvs5gsb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x-k_gnknn"/><path class="hvs5gsb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:letter-opened-bold-duotone"} {...others} />);
}

export default Component;
