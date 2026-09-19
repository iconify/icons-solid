import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x6yze9bve.css';
import '../../css/d/dmatdn5xb.css';
import '../../css/n/nzb9c50ih.css';
import '../../css/g/g89kkeb5g.css';
import '../../css/p/ptdsbkbld.css';
import '../../css/l/lpjqmxrze.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="x6yze9bve"/><path class="dmatdn5xb"/><path class="nzb9c50ih"/><path class="g89kkeb5g"/><path class="ptdsbkbld"/><path class="lpjqmxrze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layer-group-duo"} {...others} />);
}

export default Component;
