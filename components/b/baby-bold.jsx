import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h4wa_q_fc.css';

const viewBox = {"width":80,"height":80};
const content = `<path clip-rule="evenodd" class="h4wa_q_fc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:baby-bold"} {...others} />);
}

export default Component;
