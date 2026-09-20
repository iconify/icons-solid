import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/des0iyt-k.css';
import '../../css/g/g00svwj5t.css';
import '../../css/q/qqef1qxre.css';
import '../../css/v/vj5p1efoe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="des0iyt-k"/><path class="g00svwj5t"/><path class="qqef1qxre"/><path class="vj5p1efoe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:streamystats"} {...others} />);
}

export default Component;
