import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sgj6zf-os.css';
import '../../css/d/dif-cubim.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="sgj6zf-os"/><path class="dif-cubim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:hospital-solid"} {...others} />);
}

export default Component;
