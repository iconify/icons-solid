import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nnhy8pd4d.css';
import '../../css/s/srze-hcsc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nnhy8pd4d"/><path class="srze-hcsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-chatbubbles"} {...others} />);
}

export default Component;
