import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tje4al_8h.css';
import '../../css/s/sqiunld7k.css';
import '../../css/k/kwp7kyb3m.css';
import '../../css/b/b99lu4blo.css';
import '../../css/w/wxuo8vbgv.css';
import '../../css/v/v5iptnbcl.css';
import '../../css/v/vg74wsb3g.css';
import '../../css/f/f68-xcb4b.css';
import '../../css/i/i9249db-n.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="tje4al_8h"/><path class="sqiunld7k"/><path class="kwp7kyb3m"/><path class="b99lu4blo"/><path class="wxuo8vbgv"/><path class="v5iptnbcl"/><path class="vg74wsb3g"/><path class="f68-xcb4b"/><path class="i9249db-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:kale"} {...others} />);
}

export default Component;
