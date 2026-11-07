import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kj208xbck.css';
import '../../css/t/takxuugoc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kj208xbck"/><path class="takxuugoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pause-bold"} {...others} />);
}

export default Component;
