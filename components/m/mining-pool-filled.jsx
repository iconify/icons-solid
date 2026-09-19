import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rg062c9yd.css';
import '../../css/w/w4rah7bzs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rg062c9yd"/><path clip-rule="evenodd" class="w4rah7bzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:mining-pool-filled"} {...others} />);
}

export default Component;
