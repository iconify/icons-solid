import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-6j9z3rc.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="f-6j9z3rc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-1-bold"} {...others} />);
}

export default Component;
