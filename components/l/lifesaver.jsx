import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n4yelbbex.css';
import '../../css/a/azn53ws-b.css';
import '../../css/p/ph3p_zb4p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="n4yelbbex"/><path vector-effect="non-scaling-stroke" class="azn53ws-b"/><path vector-effect="non-scaling-stroke" class="ph3p_zb4p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:lifesaver"} {...others} />);
}

export default Component;
