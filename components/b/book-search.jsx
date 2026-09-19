import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zgu2rvdku.css';
import '../../css/l/lp8rlibep.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zgu2rvdku"/><path class="lp8rlibep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:book-search"} {...others} />);
}

export default Component;
