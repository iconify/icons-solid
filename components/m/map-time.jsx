import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng3z04b6k.css';
import '../../css/l/l2gxg7bxh.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="ng3z04b6k"/><path class="l2gxg7bxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:map-time"} {...others} />);
}

export default Component;
