import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwf3d0p4e.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gwf3d0p4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:basket-minus-outline"} {...others} />);
}

export default Component;
