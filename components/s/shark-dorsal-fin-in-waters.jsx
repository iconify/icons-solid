import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g4n3iyb9y.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g4n3iyb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:shark-dorsal-fin-in-waters"} {...others} />);
}

export default Component;
