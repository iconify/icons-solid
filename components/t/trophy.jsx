import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdieb42co.css';
import '../../css/s/s1nbg9lfp.css';
import '../../css/l/l5dtm8qih.css';
import '../../css/r/rxlbqwg2m.css';
import '../../css/l/lvjbzjcnh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="zdieb42co"/><path class="s1nbg9lfp"/><path clip-rule="evenodd" class="l5dtm8qih"/><path class="rxlbqwg2m"/><path class="lvjbzjcnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:trophy"} {...others} />);
}

export default Component;
