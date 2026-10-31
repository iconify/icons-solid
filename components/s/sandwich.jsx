import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxs35wb7a.css';
import '../../css/b/bp-164bdh.css';
import '../../css/o/otv8d0sgy.css';
import '../../css/s/s07_vs70t.css';
import '../../css/g/grlu9nbbf.css';
import '../../css/d/dexbfof6b.css';
import '../../css/o/orjnwacdf.css';
import '../../css/v/vzzi4sbsi.css';
import '../../css/r/rwticrs-s.css';
import '../../css/o/o3t1a_bry.css';
import '../../css/h/htb3v3t6y.css';
import '../../css/g/g109e1rzq.css';
import '../../css/j/j7b72en6n.css';
import '../../css/j/jzpxzyzyn.css';
import '../../css/w/wrjopbezv.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g class="gxs35wb7a"><path class="bp-164bdh"/><path class="otv8d0sgy"/><path class="s07_vs70t"/><path class="grlu9nbbf"/><path class="dexbfof6b"/><path class="orjnwacdf"/><path class="vzzi4sbsi"/><path class="rwticrs-s"/><path class="o3t1a_bry"/><path class="htb3v3t6y"/><path class="g109e1rzq"/><path class="j7b72en6n"/><path class="jzpxzyzyn"/><path class="wrjopbezv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:sandwich"} {...others} />);
}

export default Component;
