import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kv6eoc9-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kv6eoc9-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:fishing-area-1"} {...others} />);
}

export default Component;
