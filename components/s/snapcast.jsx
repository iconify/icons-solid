import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hp49xnb5l.css';
import '../../css/w/wln7u9w6d.css';
import '../../css/d/d45omcbyd.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="hp49xnb5l"/><path class="wln7u9w6d"/><path class="d45omcbyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:snapcast"} {...others} />);
}

export default Component;
