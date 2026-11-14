import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cwpmqo6cv.css';
import '../../css/z/zoawvx8so.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cwpmqo6cv"/><path class="zoawvx8so"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-search-01"} {...others} />);
}

export default Component;
