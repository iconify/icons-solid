import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9bqpobqf.css';
import '../../css/p/pl6n1jb4o.css';
import '../../css/a/am9gd1bji.css';
import '../../css/b/bu250ebwy.css';
import '../../css/c/c2-jsbb5z.css';
import '../../css/a/amp5-ihcn.css';
import '../../css/x/x7zm42brk.css';
import '../../css/d/d29zta8ts.css';
import '../../css/g/g-uniicgv.css';
import '../../css/z/zduwojb6s.css';
import '../../css/o/o_h8bxe9n.css';
import '../../css/p/p4schvbnq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n9bqpobqf"/><path class="pl6n1jb4o"/><path class="am9gd1bji"/><path class="bu250ebwy"/><path class="c2-jsbb5z"/><path class="amp5-ihcn"/><path class="x7zm42brk"/><path class="d29zta8ts"/><path class="g-uniicgv"/><path class="zduwojb6s"/><path class="o_h8bxe9n"/><path class="p4schvbnq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:taxi"} {...others} />);
}

export default Component;
