import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_dq43bgv.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="w_dq43bgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:house-fire-outline"} {...others} />);
}

export default Component;
