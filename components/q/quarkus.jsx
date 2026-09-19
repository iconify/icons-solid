import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbnrr4bpq.css';
import '../../css/p/pqj1fgben.css';
import '../../css/s/s8--1cujd.css';
import '../../css/t/tx3-1hyva.css';
import '../../css/h/h5ag3ubwe.css';
import '../../css/w/w0sdsac4s.css';
import '../../css/k/kgo8mbbfn.css';
import '../../css/z/z6gt_rb3t.css';
import '../../css/z/zawvaotkp.css';
import '../../css/i/idp13fbig.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="rbnrr4bpq"/><path class="pqj1fgben"/><path class="s8--1cujd"/><path class="tx3-1hyva"/><path class="h5ag3ubwe"/><path class="w0sdsac4s"/><path class="kgo8mbbfn"/><path class="z6gt_rb3t"/><path class="zawvaotkp"/><path class="idp13fbig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:quarkus"} {...others} />);
}

export default Component;
