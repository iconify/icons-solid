import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj208xbck.css';
import '../../css/g/gz18a5efe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kj208xbck"/><path class="gz18a5efe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pause-bold-duotone"} {...others} />);
}

export default Component;
