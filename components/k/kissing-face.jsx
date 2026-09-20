import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvp8tf28n.css';
import '../../css/z/z76gz2tak.css';
import '../../css/n/nt_zhrq7z.css';
import '../../css/b/bv8v5ibjr.css';
import '../../css/t/t12lnm5xk.css';
import '../../css/f/fzswwpbky.css';
import '../../css/v/vc_809bqd.css';
import '../../css/j/j5ppbfvzx.css';
import '../../css/r/r7gii4b4d.css';
import '../../css/w/w0y101bjg.css';
import '../../css/m/mr-bpej6p.css';
import '../../css/z/zd_83vpne.css';
import '../../css/a/aufcx7bqg.css';
import '../../css/b/bli8ahu1x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dvp8tf28n"/><path class="z76gz2tak"/><path class="nt_zhrq7z"/><path class="bv8v5ibjr"/><path class="t12lnm5xk"/><path class="fzswwpbky"/><path class="vc_809bqd"/><path class="j5ppbfvzx"/><path class="r7gii4b4d"/><path class="w0y101bjg"/><path class="mr-bpej6p"/><path class="zd_83vpne"/><path class="aufcx7bqg"/><path class="bli8ahu1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:kissing-face"} {...others} />);
}

export default Component;
