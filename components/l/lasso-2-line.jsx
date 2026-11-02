import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lcy_mewmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lcy_mewmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:lasso-2-line"} {...others} />);
}

export default Component;
