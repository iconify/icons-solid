import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djfjsab7t.css';
import '../../css/m/mj8r-ibdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djfjsab7t"/><path class="mj8r-ibdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chart-pie-2-fill"} {...others} />);
}

export default Component;
