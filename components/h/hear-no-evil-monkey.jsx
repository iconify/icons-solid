import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/noxifkb4v.css';
import '../../css/y/yft-n4b2i.css';
import '../../css/t/toc-k6blg.css';
import '../../css/n/nf25bmbyo.css';
import '../../css/j/jdzag0b_u.css';
import '../../css/x/xoxof2b5r.css';
import '../../css/j/jiii2sbtp.css';
import '../../css/a/adj9nmbge.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="noxifkb4v"/><path class="yft-n4b2i"/><path class="toc-k6blg"/><path class="nf25bmbyo"/><path class="jdzag0b_u"/><path class="xoxof2b5r"/><path class="jiii2sbtp"/><path class="adj9nmbge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hear-no-evil-monkey"} {...others} />);
}

export default Component;
