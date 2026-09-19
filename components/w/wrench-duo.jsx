import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4b3ac4nj.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="n4b3ac4nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:wrench-duo"} {...others} />);
}

export default Component;
