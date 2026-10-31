import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyr-ws_tx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dyr-ws_tx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zodiac-pisces-duotone-round"} {...others} />);
}

export default Component;
