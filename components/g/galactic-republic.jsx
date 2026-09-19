import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdq-wdb5q.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="fdq-wdb5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-brands:galactic-republic"} {...others} />);
}

export default Component;
