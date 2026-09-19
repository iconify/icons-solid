import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyi47_3sj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xyi47_3sj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:audio-description"} {...others} />);
}

export default Component;
