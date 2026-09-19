import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm7dvmcxp.css';

const viewBox = {"width":17,"height":17};
const content = `<path class="mm7dvmcxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:extinguisher"} {...others} />);
}

export default Component;
