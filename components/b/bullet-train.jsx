import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3zb72n6r.css';
import '../../css/e/e4vvxpqme.css';
import '../../css/y/yyrfnhbes.css';
import '../../css/s/s1hx80bpw.css';
import '../../css/v/vu-l5--5g.css';
import '../../css/n/nuc-m-bgz.css';
import '../../css/z/zza7icbsl.css';
import '../../css/z/zzi2tdvkv.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="j3zb72n6r"/><path class="e4vvxpqme"/><path class="yyrfnhbes"/><path class="s1hx80bpw"/><circle class="vu-l5--5g"/><circle class="nuc-m-bgz"/><path class="zza7icbsl"/><path class="zzi2tdvkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bullet-train"} {...others} />);
}

export default Component;
