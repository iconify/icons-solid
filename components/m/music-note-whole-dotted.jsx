import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkyld3bjj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkyld3bjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:music-note-whole-dotted"} {...others} />);
}

export default Component;
