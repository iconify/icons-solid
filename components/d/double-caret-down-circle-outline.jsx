import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq482vr_z.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="lq482vr_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:double-caret-down-circle-outline"} {...others} />);
}

export default Component;
