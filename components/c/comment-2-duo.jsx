import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi65dfb6y.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="hi65dfb6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:comment-2-duo"} {...others} />);
}

export default Component;
