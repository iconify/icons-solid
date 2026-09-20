import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cr1bbeb8o.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cr1bbeb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:phonecall-receive-outline"} {...others} />);
}

export default Component;
