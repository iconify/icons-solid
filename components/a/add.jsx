import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqd8fcboz.css';
import '../../css/p/pg9erg_-c.css';
import '../../css/r/ri_6z2bec.css';
import '../../css/h/hi60_ub5k.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="hqd8fcboz"><circle class="pg9erg_-c"/><path class="ri_6z2bec"/><path class="hi60_ub5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gala:add"} {...others} />);
}

export default Component;
