import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0cdhsbug.css';

const viewBox = {"width":1025,"height":1025};
const content = `<path class="g0cdhsbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:lightoff"} {...others} />);
}

export default Component;
