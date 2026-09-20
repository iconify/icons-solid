import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9n_9-b9e.css';
import '../../css/z/zhvmu9b_u.css';
import '../../css/o/osur64b6w.css';
import '../../css/w/w195kz00o.css';
import '../../css/y/yuhbhbg-h.css';
import '../../css/r/roombi3ku.css';

const viewBox = {"width":220,"height":220};
const content = `<g class="u9n_9-b9e"><path clip-rule="evenodd" class="zhvmu9b_u"/><path clip-rule="evenodd" class="osur64b6w"/><path clip-rule="evenodd" class="w195kz00o"/><path class="yuhbhbg-h"/><path clip-rule="evenodd" class="roombi3ku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:effect-ts-light"} {...others} />);
}

export default Component;
