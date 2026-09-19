import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn8ep4exf.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="rn8ep4exf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:hospital"} {...others} />);
}

export default Component;
