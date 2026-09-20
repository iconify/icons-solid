import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5oho7a5i.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k5oho7a5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:adjust-horizontal-alt-outline"} {...others} />);
}

export default Component;
