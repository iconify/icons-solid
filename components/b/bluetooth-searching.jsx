import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/i6lvzy91f.css';
import '../../css/x/x_3mgpb4r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="i6lvzy91f"/><path class="x_3mgpb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:bluetooth-searching"} {...others} />);
}

export default Component;
