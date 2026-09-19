import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fc-d2sbgq.css';
import '../../css/y/yk-lniigf.css';
import '../../css/b/b3zmgxb9u.css';
import '../../css/j/j4r7oqbtj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="fc-d2sbgq"/><path class="yk-lniigf"/><path class="b3zmgxb9u"/><path class="j4r7oqbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kibana-wordmark"} {...others} />);
}

export default Component;
