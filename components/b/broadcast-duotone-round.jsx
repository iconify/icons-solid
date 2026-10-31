import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy61r9uhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sy61r9uhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:broadcast-duotone-round"} {...others} />);
}

export default Component;
