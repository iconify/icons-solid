import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9y54obih.css';
import '../../css/f/ftd3vipaa.css';
import '../../css/w/www_habqm.css';
import '../../css/x/xd4kzdbhz.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="g9y54obih"/><path class="ftd3vipaa"/><path class="www_habqm"/><path class="xd4kzdbhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:die-3-duo"} {...others} />);
}

export default Component;
