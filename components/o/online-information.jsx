import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/e/e0eoy4o5c.css';
import '../../css/t/tl7lnrb1r.css';
import '../../css/w/wh8daubsk.css';
import '../../css/j/jhldv8e4a.css';
import '../../css/h/hc6qp2zpb.css';
import '../../css/s/s-scxzb5t.css';
import '../../css/d/dzzr71b3k.css';
import '../../css/c/c0zw3inxq.css';
import '../../css/q/qojytpb5p.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="e0eoy4o5c"/><path class="tl7lnrb1r"/><path class="wh8daubsk"/><path class="jhldv8e4a"/><path class="hc6qp2zpb"/><path class="s-scxzb5t"/><path class="dzzr71b3k"/><path class="c0zw3inxq"/><path class="qojytpb5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:online-information"} {...others} />);
}

export default Component;
