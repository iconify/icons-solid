import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/v/vugw0v35w.css';
import '../../css/t/tdb8ilu_q.css';
import '../../css/f/frjk08b-g.css';
import '../../css/b/bdhh9gbzq.css';
import '../../css/m/mcmap5bft.css';
import '../../css/p/pz87a1zuo.css';
import '../../css/p/psnhdibbq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="s9cl3zbei"><rect class="vugw0v35w"/><path class="tdb8ilu_q"/><path class="frjk08b-g"/><path class="bdhh9gbzq"/><path class="mcmap5bft"/><path class="pz87a1zuo"/><path class="psnhdibbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:transport"} {...others} />);
}

export default Component;
