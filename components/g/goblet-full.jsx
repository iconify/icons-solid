import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sfkl0zb8u.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="sfkl0zb8u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:goblet-full"} {...others} />);
}

export default Component;
