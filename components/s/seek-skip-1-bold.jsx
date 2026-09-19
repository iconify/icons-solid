import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/g3xgywz_t.css';
import '../../css/k/k433me6_u.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="to-5kdesz"><path class="g3xgywz_t"/><path class="k433me6_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:seek-skip-1-bold"} {...others} />);
}

export default Component;
