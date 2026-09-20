import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vnaxz9b-k.css';
import '../../css/w/w8nbmm6vs.css';
import '../../css/d/dne5xxbvu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vnaxz9b-k"/><path class="w8nbmm6vs"/><path class="dne5xxbvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:enlarge-16"} {...others} />);
}

export default Component;
