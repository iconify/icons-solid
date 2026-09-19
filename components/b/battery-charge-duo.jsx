import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2g2lsb9m.css';
import '../../css/w/wpl4psbck.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="n2g2lsb9m"/><path class="wpl4psbck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:battery-charge-duo"} {...others} />);
}

export default Component;
