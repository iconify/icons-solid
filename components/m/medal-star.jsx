import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tawrpdb4t.css';
import '../../css/m/mt3oabbtx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tawrpdb4t"/><path class="mt3oabbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:medal-star"} {...others} />);
}

export default Component;
