import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sx5jtdgol.css';

const viewBox = {"width":17,"height":17};
const content = `<path class="sx5jtdgol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:arrow-thick-up"} {...others} />);
}

export default Component;
