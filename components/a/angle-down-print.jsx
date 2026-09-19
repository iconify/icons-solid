import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-an6tb_w.css';
import '../../css/b/b8yay4_5i.css';
import '../../css/l/l076-htbj.css';
import '../../css/i/iba0uvb3k.css';
import '../../css/q/q86hgzv6o.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u-an6tb_w"/><path class="b8yay4_5i"/><path class="l076-htbj"/><path class="iba0uvb3k"/><path class="q86hgzv6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:angle-down-print"} {...others} />);
}

export default Component;
