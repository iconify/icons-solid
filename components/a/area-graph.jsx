import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ua-9c7bmm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ua-9c7bmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:area-graph"} {...others} />);
}

export default Component;
