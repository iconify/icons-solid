import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo8y5cbqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eo8y5cbqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:chart-vertical-fill"} {...others} />);
}

export default Component;
