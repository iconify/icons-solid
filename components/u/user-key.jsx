import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h99d28g7n.css';
import '../../css/i/i7nhoi20w.css';
import '../../css/l/l76wbdc6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h99d28g7n"/><circle class="i7nhoi20w"/><path class="l76wbdc6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-key"} {...others} />);
}

export default Component;
