import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jiaf6kb4x.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jiaf6kb4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:barrel-with-bunghole"} {...others} />);
}

export default Component;
