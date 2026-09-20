import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rku15hbsi.css';
import '../../css/k/k3idjubot.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rku15hbsi"/><path class="k3idjubot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flow-like"} {...others} />);
}

export default Component;
