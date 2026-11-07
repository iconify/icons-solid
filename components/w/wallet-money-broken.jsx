import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ohsv2hiuv.css';
import '../../css/u/u0l_627uh.css';
import '../../css/b/b8qhu_-ma.css';
import '../../css/t/t2z265b2q.css';
import '../../css/z/z10ud9_db.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ohsv2hiuv"/><path class="u0l_627uh"/><path class="b8qhu_-ma"/><path class="t2z265b2q"/><path class="z10ud9_db"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-money-broken"} {...others} />);
}

export default Component;
