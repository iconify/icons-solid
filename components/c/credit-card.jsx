import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2g6iacnb.css';
import '../../css/j/jq2d5bb3r.css';
import '../../css/u/ukqhpdbty.css';
import '../../css/p/pczniacmh.css';
import '../../css/j/j6mb7v78d.css';
import '../../css/b/b89o8kb5z.css';
import '../../css/g/ggwjcy48d.css';
import '../../css/o/oh9c02iai.css';
import '../../css/a/ay4w6yo6j.css';
import '../../css/l/lc2-i1bbj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v2g6iacnb wm-shadow"/><path class="jq2d5bb3r wm-k"/><path class="ukqhpdbty wm-k"/><path class="pczniacmh wm-k"/><path class="j6mb7v78d wm-k"/><path class="b89o8kb5z wm-k"/><path class="ggwjcy48d wm-shine"/><path class="oh9c02iai wm-a"/><path class="ay4w6yo6j wm-a"/><path class="lc2-i1bbj wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:credit-card"} {...others} />);
}

export default Component;
