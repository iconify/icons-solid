import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj7gr_b9p.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="cj7gr_b9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:signal-25"} {...others} />);
}

export default Component;
