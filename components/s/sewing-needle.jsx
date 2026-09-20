import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn8qy4bru.css';
import '../../css/r/rihv4mbew.css';
import '../../css/l/lqf9i2baw.css';
import '../../css/m/mld6c5dxs.css';
import '../../css/h/hegx5tafg.css';
import '../../css/w/wqfhhcbsc.css';
import '../../css/d/d8-enmncb.css';
import '../../css/g/gjmzfurdb.css';
import '../../css/n/ny_5pn2km.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="jn8qy4bru"><path class="rihv4mbew"/><path class="lqf9i2baw"/><path class="mld6c5dxs"/></g><path class="hegx5tafg"/><path class="wqfhhcbsc"/><path class="d8-enmncb"/><path class="gjmzfurdb"/><path class="ny_5pn2km"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:sewing-needle"} {...others} />);
}

export default Component;
