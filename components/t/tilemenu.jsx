import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5mwqbc4z.css';

const viewBox = {"width":666,"height":680};
const content = `<path class="j5mwqbc4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:tilemenu"} {...others} />);
}

export default Component;
