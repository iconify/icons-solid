import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dzd9s-zra.css';
import '../../css/e/ejm328bje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dzd9s-zra"/><path class="ejm328bje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:edit-multiple"} {...others} />);
}

export default Component;
