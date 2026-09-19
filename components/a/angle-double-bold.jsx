import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/di2q-x_mr.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="di2q-x_mr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:angle-double-bold"} {...others} />);
}

export default Component;
