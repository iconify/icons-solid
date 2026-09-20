import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cmpz32o5f.css';
import '../../css/y/yxayk5b9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cmpz32o5f"/><path class="yxayk5b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:briefcase"} {...others} />);
}

export default Component;
