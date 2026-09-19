import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqsw8ihjc.css';
import '../../css/i/iue9lzdei.css';
import '../../css/i/ipgwi6qyg.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="pqsw8ihjc"/><path class="iue9lzdei"/><path class="ipgwi6qyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-deviant-art"} {...others} />);
}

export default Component;
