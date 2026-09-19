import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr8nz_b2d.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="tr8nz_b2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:lightbulb-2-outline"} {...others} />);
}

export default Component;
