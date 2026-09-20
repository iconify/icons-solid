import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dlugwdbyd.css';
import '../../css/a/a8v_pfb_t.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/v/vo0z5_u8l.css';
import '../../css/d/dvd6fwb9u.css';
import '../../css/t/tw4odbbpy.css';
import '../../css/o/obl237bgl.css';

const viewBox = {"width":72,"height":72};
const content = `<rect class="dlugwdbyd"/><path class="a8v_pfb_t"/><g class="brzn_0bpr"><path class="vo0z5_u8l"/><g class="dvd6fwb9u"><path class="tw4odbbpy"/><rect class="obl237bgl"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:reusable-bag"} {...others} />);
}

export default Component;
