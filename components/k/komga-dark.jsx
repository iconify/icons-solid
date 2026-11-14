import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/blnjp86xq.css';
import '../../css/p/p0u6a5hnt.css';
import '../../css/e/e420htnov.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="blnjp86xq"/><path class="p0u6a5hnt"/><path class="e420htnov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:komga-dark"} {...others} />);
}

export default Component;
