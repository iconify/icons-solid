import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s8g8h_b3b.css';
import '../../css/p/p8n6moh0c.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="s8g8h_b3b"/><path class="p8n6moh0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mega"} {...others} />);
}

export default Component;
