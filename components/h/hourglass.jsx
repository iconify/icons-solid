import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/e/eh7ei6juo.css';
import '../../css/m/mqm762b3o.css';
import '../../css/d/dm-z4qbtw.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="to-5kdesz"><path class="eh7ei6juo"/><path class="mqm762b3o"/><path class="dm-z4qbtw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:hourglass"} {...others} />);
}

export default Component;
