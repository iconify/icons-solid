import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y8mbonb9n.css';
import '../../css/z/zpnq9rbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y8mbonb9n"/><path class="zpnq9rbtv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:umbrella"} {...others} />);
}

export default Component;
