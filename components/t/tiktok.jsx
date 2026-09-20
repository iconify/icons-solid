import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsq8sfrxg.css';
import '../../css/f/fkt9bwryo.css';
import '../../css/b/b8ni7-bky.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dsq8sfrxg"/><path class="fkt9bwryo"/><path class="b8ni7-bky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tiktok"} {...others} />);
}

export default Component;
