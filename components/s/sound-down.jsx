import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc5qjjbur.css';

const viewBox = {"width":512,"height":472};
const content = `<path class="pc5qjjbur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:sound-down"} {...others} />);
}

export default Component;
