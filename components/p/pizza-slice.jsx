import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m6pkdzb0p.css';
import '../../css/j/jbfeyeo7i.css';
import '../../css/x/x6-sqeb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="m6pkdzb0p"/><path class="jbfeyeo7i"/><path class="x6-sqeb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:pizza-slice"} {...others} />);
}

export default Component;
