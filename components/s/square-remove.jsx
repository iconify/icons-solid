import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9kyeodza.css';
import '../../css/w/wbt-tgj5f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9kyeodza"/><path class="wbt-tgj5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:square-remove"} {...others} />);
}

export default Component;
