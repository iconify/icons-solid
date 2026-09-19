import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/ik1jypbyt.css';
import '../../css/d/dclksmbzh.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><rect class="ik1jypbyt"/><path class="dclksmbzh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:archive"} {...others} />);
}

export default Component;
