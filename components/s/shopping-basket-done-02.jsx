import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x1aq_zb1l.css';
import '../../css/o/oblmn2yok.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/e/eg4xct43z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="x1aq_zb1l"/><path class="oblmn2yok"/><path class="yjo9i5b3u"/><path class="eg4xct43z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-done-02"} {...others} />);
}

export default Component;
