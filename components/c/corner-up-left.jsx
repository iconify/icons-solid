import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mh1dshbre.css';
import '../../css/m/m59ryukda.css';
import '../../css/o/o7b4d5bob.css';
import '../../css/o/oj7zti3ma.css';
import '../../css/x/xnzf6sbqf.css';
import '../../css/a/axf1jobqv.css';
import '../../css/k/kv4603llz.css';
import '../../css/c/csdgv0bvp.css';
import '../../css/i/iq645fbfp.css';
import '../../css/b/btx92jfmy.css';
import '../../css/c/cpg2x5b2l.css';
import '../../css/l/lffye9hds.css';
import '../../css/x/xk4pmjdnm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mh1dshbre wm-shadow"/><path class="m59ryukda wm-k"/><path class="o7b4d5bob wm-k"/><path class="oj7zti3ma wm-k"/><path class="wm-k xnzf6sbqf"/><path class="axf1jobqv wm-shine"/><path class="kv4603llz wm-k"/><path class="csdgv0bvp wm-a"/><path class="iq645fbfp wm-a"/><path class="btx92jfmy wm-a"/><path class="cpg2x5b2l wm-a"/><path class="lffye9hds wm-a"/><path class="wm-a xk4pmjdnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:corner-up-left"} {...others} />);
}

export default Component;
