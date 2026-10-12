import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/on6cs378z.css';
import '../../css/z/zok44gb2s.css';
import '../../css/i/i2jpvs3ph.css';
import '../../css/n/n6_rvmq3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="on6cs378z"/><path class="zok44gb2s"/><path class="i2jpvs3ph"/><path class="n6_rvmq3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:box-location"} {...others} />);
}

export default Component;
