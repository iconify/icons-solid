import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgqpnubmx.css';
import '../../css/e/e8k7b6bzg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bgqpnubmx"/><path class="e8k7b6bzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:opengym"} {...others} />);
}

export default Component;
