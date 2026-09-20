import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7un7q-3o.css';
import '../../css/p/p8sne4bcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7un7q-3o"/><path clip-rule="evenodd" class="p8sne4bcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ncr"} {...others} />);
}

export default Component;
