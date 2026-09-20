import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvmv32bwd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mvmv32bwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freefinance-dark"} {...others} />);
}

export default Component;
