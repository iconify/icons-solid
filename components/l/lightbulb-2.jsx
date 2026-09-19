import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbb2bw7jj.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="lbb2bw7jj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:lightbulb-2"} {...others} />);
}

export default Component;
