import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wnqh4sixl.css';
import '../../css/n/n2noceb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wnqh4sixl"/><path clip-rule="evenodd" class="n2noceb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-low-outline"} {...others} />);
}

export default Component;
