import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u9xtr9bvt.css';
import '../../css/p/pcki9vn9e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="u9xtr9bvt"/><path class="pcki9vn9e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-details"} {...others} />);
}

export default Component;
