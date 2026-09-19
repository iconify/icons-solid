import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g18q7hdew.css';

const viewBox = {"width":1026,"height":1024};
const content = `<path class="g18q7hdew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:spoon"} {...others} />);
}

export default Component;
