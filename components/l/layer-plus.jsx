import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o4cfygela.css';
import '../../css/t/tdlchnb-u.css';
import '../../css/r/rykek3b0h.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o4cfygela"/><path class="tdlchnb-u"/><path clip-rule="evenodd" class="rykek3b0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:layer-plus"} {...others} />);
}

export default Component;
