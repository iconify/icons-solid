import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0cg7zb5q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z0cg7zb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:surveillance-camera"} {...others} />);
}

export default Component;
