import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/low_q9xkh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="low_q9xkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:three-slashes"} {...others} />);
}

export default Component;
