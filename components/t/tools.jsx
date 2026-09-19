import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y47ge5b2d.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="y47ge5b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:tools"} {...others} />);
}

export default Component;
