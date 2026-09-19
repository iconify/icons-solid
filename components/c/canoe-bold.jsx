import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq9fuee_f.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="xq9fuee_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:canoe-bold"} {...others} />);
}

export default Component;
