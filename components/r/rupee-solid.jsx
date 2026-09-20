import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gav4x1b2p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gav4x1b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:rupee-solid"} {...others} />);
}

export default Component;
