import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp4s3bctp.css';
import '../../css/d/dnly2pztq.css';
import '../../css/l/l6z2sfl1o.css';
import '../../css/g/ggy8yjbqa.css';
import '../../css/p/p14d69bqi.css';
import '../../css/f/f9llwzbwr.css';
import '../../css/t/tz8o69bui.css';
import '../../css/e/e96dvok8r.css';
import '../../css/o/o3son7b_k.css';
import '../../css/l/lze4j-b6i.css';
import '../../css/n/n58e6ezpc.css';
import '../../css/u/uf_hibofl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mp4s3bctp wm-shadow"/><path class="dnly2pztq wm-k"/><path class="l6z2sfl1o wm-k"/><path class="ggy8yjbqa wm-k"/><path class="p14d69bqi wm-k"/><path class="f9llwzbwr wm-k"/><path class="tz8o69bui wm-shine"/><path class="e96dvok8r wm-a"/><path class="o3son7b_k wm-a"/><path class="lze4j-b6i wm-a"/><path class="n58e6ezpc wm-a"/><path class="uf_hibofl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:sprout"} {...others} />);
}

export default Component;
