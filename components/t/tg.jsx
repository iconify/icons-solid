import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wxu_pgbcq.css';
import '../../css/w/wofugscov.css';
import '../../css/m/mrqz9mb6c.css';
import '../../css/l/ldoup0bcb.css';

const viewBox = {"width":300,"height":187};
const content = `<g class="ft5dv1b6b"><path class="wxu_pgbcq"/><path class="wofugscov"/><path class="mrqz9mb6c"/><path class="ldoup0bcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:tg"} {...others} />);
}

export default Component;
