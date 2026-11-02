import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r63g9jbrx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r63g9jbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:progress-75-line"} {...others} />);
}

export default Component;
