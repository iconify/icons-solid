import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_84t1yuh.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="f_84t1yuh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:h-2-bold"} {...others} />);
}

export default Component;
