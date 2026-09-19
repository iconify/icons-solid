import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/td8-cml1e.css';
import '../../css/s/szy8jkqkv.css';
import '../../css/t/te7ffcutq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="td8-cml1e"/><path class="szy8jkqkv"/><path class="te7ffcutq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hourglass-2-duo"} {...others} />);
}

export default Component;
