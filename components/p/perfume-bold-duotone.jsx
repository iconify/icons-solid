import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtpeb-edw.css';
import '../../css/u/unglyeb7q.css';
import '../../css/l/ldk1s7bmt.css';
import '../../css/d/d_o7v-41g.css';
import '../../css/q/qri23lb0u.css';
import '../../css/p/pmppsx50i.css';
import '../../css/y/yvsxkeb5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xtpeb-edw"><path class="unglyeb7q"/><path class="ldk1s7bmt"/><path class="d_o7v-41g"/></g><path class="qri23lb0u"/><path class="pmppsx50i"/><path class="yvsxkeb5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:perfume-bold-duotone"} {...others} />);
}

export default Component;
