import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxbpgacte.css';
import '../../css/k/kmp30jjka.css';
import '../../css/h/hdbm4obld.css';
import '../../css/d/dmmpmib0w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cxbpgacte"/><path class="kmp30jjka"/><path class="hdbm4obld"/><path class="dmmpmib0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:whitepennant"} {...others} />);
}

export default Component;
