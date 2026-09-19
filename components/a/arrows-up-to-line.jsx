import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pokp8ab5s.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="pokp8ab5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:arrows-up-to-line"} {...others} />);
}

export default Component;
