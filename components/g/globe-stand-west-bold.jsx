import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/txf-yabmw.css';
import '../../css/w/ww3moibix.css';
import '../../css/s/sek3yjq5i.css';
import '../../css/a/aw5yo8b1d.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="txf-yabmw"/><path class="ww3moibix"/><path class="sek3yjq5i"/><path clip-rule="evenodd" class="aw5yo8b1d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-stand-west-bold"} {...others} />);
}

export default Component;
