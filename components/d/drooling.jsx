import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/g/g-ivyab4m.css';
import '../../css/d/dgrszqblu.css';
import '../../css/r/rqnixx5da.css';
import '../../css/b/bxutntb2z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="g-ivyab4m"/><path class="dgrszqblu"/><path class="rqnixx5da"/><path class="bxutntb2z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:drooling"} {...others} />);
}

export default Component;
