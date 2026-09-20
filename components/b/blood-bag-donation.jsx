import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/d/dnatl4bkd.css';
import '../../css/a/a3kgacpin.css';
import '../../css/f/f8ey45u_u.css';
import '../../css/z/z4vo5tbkj.css';
import '../../css/x/xnu26vbyb.css';
import '../../css/g/g_mld8bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="dnatl4bkd"/><path clip-rule="evenodd" class="a3kgacpin"/><path class="f8ey45u_u"/><path class="z4vo5tbkj"/><path class="xnu26vbyb"/><path class="g_mld8bxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:blood-bag-donation"} {...others} />);
}

export default Component;
