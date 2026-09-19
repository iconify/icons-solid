import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qin0occ5a.css';

const viewBox = {"width":1536,"height":1600};
const content = `<path class="qin0occ5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:whatsapp"} {...others} />);
}

export default Component;
