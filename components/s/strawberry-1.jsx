import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy13beb3q.css';
import '../../css/k/kv6eqdmag.css';
import '../../css/w/wgugcg76t.css';
import '../../css/h/h8sx8qzzx.css';
import '../../css/l/lreiuv09l.css';
import '../../css/f/f938wjc2n.css';
import '../../css/e/ehfsisb-a.css';
import '../../css/b/body65baw.css';
import '../../css/h/hfciv4b-u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sy13beb3q"/><path class="kv6eqdmag"/><path class="wgugcg76t"/><path class="h8sx8qzzx"/><path class="lreiuv09l"/><path class="f938wjc2n"/><path class="ehfsisb-a"/><path class="body65baw"/><path class="hfciv4b-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:strawberry-1"} {...others} />);
}

export default Component;
