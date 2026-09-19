import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7wa49b_l.css';
import '../../css/i/ihfx7jbtq.css';
import '../../css/r/r17ikubfc.css';
import '../../css/x/xwkhy7b0j.css';
import '../../css/x/xbq95kogh.css';

const viewBox = {"width":301,"height":201};
const content = `<g class="ft5dv1b6b"><path class="c7wa49b_l"/><path class="ihfx7jbtq"/><circle class="r17ikubfc"/><circle class="xwkhy7b0j"/><path class="xbq95kogh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:pk"} {...others} />);
}

export default Component;
