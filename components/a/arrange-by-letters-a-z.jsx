import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrd3ofbtz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rrd3ofbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:arrange-by-letters-a-z"} {...others} />);
}

export default Component;
