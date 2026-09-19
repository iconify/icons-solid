import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs7_t6bwx.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="zs7_t6bwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:shield-compact"} {...others} />);
}

export default Component;
