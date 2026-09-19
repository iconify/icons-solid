import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/w/w6v_azclf.css';
import '../../css/b/bzbl_kbna.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="w6v_azclf"/><path class="bzbl_kbna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:cli"} {...others} />);
}

export default Component;
