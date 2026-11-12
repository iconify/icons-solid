import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eipgpmbpd.css';
import '../../css/x/xj3mixj0t.css';
import '../../css/b/b64hb-bpb.css';
import '../../css/s/s2bj7seyt.css';
import '../../css/p/p3yizxbtt.css';
import '../../css/t/t4jf_7bos.css';
import '../../css/c/cj6j83udr.css';
import '../../css/g/gmqq59b1k.css';
import '../../css/q/qmul3vbcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eipgpmbpd"/><path class="xj3mixj0t"/><path class="b64hb-bpb"/><path class="s2bj7seyt"/><path class="p3yizxbtt"/><path class="t4jf_7bos"/><path class="cj6j83udr"/><path class="gmqq59b1k"/><path class="qmul3vbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pulseweaver-dark"} {...others} />);
}

export default Component;
