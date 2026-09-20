import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arl3skb1r.css';
import '../../css/g/goyau89xf.css';
import '../../css/l/lix0afjss.css';
import '../../css/y/y9jb9usvn.css';
import '../../css/d/dmbmkj6fx.css';
import '../../css/z/z04drlb1l.css';
import '../../css/p/pp1c92wfi.css';
import '../../css/j/j-vfn3bwa.css';
import '../../css/k/k84bkzi9d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="arl3skb1r"/><rect class="goyau89xf"/><path class="lix0afjss"/><path class="y9jb9usvn"/><path class="dmbmkj6fx"/><g class="z04drlb1l"><rect class="pp1c92wfi"/><path class="j-vfn3bwa"/><path class="k84bkzi9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tram"} {...others} />);
}

export default Component;
