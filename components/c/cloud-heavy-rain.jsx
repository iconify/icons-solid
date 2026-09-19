import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/runo8_caf.css';

const viewBox = {"width":17,"height":17};
const content = `<path class="runo8_caf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:cloud-heavy-rain"} {...others} />);
}

export default Component;
