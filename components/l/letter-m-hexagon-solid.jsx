import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akyw0sb5x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="akyw0sb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-m-hexagon-solid"} {...others} />);
}

export default Component;
