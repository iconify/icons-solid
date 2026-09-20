import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1943nbyg.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="n1943nbyg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:watch-circle-heartbeat-monitor-1-solid"} {...others} />);
}

export default Component;
