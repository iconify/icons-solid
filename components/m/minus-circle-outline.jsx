import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eh2gx_b5d.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eh2gx_b5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:minus-circle-outline"} {...others} />);
}

export default Component;
