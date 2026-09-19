import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yym554b5s.css';
import '../../css/z/zfnnsw3af.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="yym554b5s"/><path class="zfnnsw3af"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:cards"} {...others} />);
}

export default Component;
