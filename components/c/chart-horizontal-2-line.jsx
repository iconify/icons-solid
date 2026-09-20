import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubzqx4l4f.css';
import '../../css/d/dnxa5bcqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ubzqx4l4f"/><path class="dnxa5bcqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chart-horizontal-2-line"} {...others} />);
}

export default Component;
