import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/im9_jacuo.css';
import '../../css/w/wjmq22vfa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="im9_jacuo"/><path class="wjmq22vfa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:beekeeper-studio"} {...others} />);
}

export default Component;
