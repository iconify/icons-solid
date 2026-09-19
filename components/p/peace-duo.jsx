import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yo2whbr3a.css';
import '../../css/t/tm5i3nbcx.css';
import '../../css/u/un4u8-1xm.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="yo2whbr3a"/><path class="tm5i3nbcx"/><path class="un4u8-1xm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:peace-duo"} {...others} />);
}

export default Component;
