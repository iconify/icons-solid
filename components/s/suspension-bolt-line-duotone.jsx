import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/j601zwbbx.css';
import '../../css/e/eupf27bpo.css';
import '../../css/i/iredkutyw.css';
import '../../css/w/wtl2pobdd.css';
import '../../css/t/te3yvob7u.css';
import '../../css/v/vd3hjpb2c.css';
import '../../css/j/jj8gmw3jw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="j601zwbbx"/><path class="eupf27bpo"/><path class="iredkutyw"/><path class="wtl2pobdd"/><path class="te3yvob7u"/><path class="vd3hjpb2c"/><path class="jj8gmw3jw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-bolt-line-duotone"} {...others} />);
}

export default Component;
