import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7m-1z1xy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="q7m-1z1xy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:align-right-solid"} {...others} />);
}

export default Component;
