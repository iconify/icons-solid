import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6rtj7bxp.css';

const viewBox = {"width":80,"height":80};
const content = `<path class="y6rtj7bxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hand-middle"} {...others} />);
}

export default Component;
