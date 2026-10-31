import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sze-jacfw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sze-jacfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-y-duocolor-round"} {...others} />);
}

export default Component;
