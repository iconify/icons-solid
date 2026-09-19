import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mtweo9b7w.css';
import '../../css/e/emjzqgb3y.css';
import '../../css/y/yjo9i5b3u.css';
import '../../css/x/xpbdn4bfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="mtweo9b7w"/><path class="emjzqgb3y"/><path class="yjo9i5b3u"/><path class="xpbdn4bfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:shopping-basket-favorite-02"} {...others} />);
}

export default Component;
