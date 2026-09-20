import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8n6hxosg.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="b8n6hxosg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:status-waiting"} {...others} />);
}

export default Component;
