import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yx3h8d0-t.css';
import '../../css/b/b8uij2b6n.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="yx3h8d0-t"/><rect class="b8uij2b6n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:square-cross"} {...others} />);
}

export default Component;
