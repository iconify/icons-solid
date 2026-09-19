import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_rdqn7gk.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="p_rdqn7gk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:diamond-duo"} {...others} />);
}

export default Component;
