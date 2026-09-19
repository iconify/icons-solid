import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsdq_3b3n.css';

const viewBox = {"width":17,"height":17};
const content = `<path class="bsdq_3b3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:square-dashed-1"} {...others} />);
}

export default Component;
