import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5w92nb7k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="n5w92nb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:field-hockey-stick"} {...others} />);
}

export default Component;
