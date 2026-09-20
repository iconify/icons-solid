import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f69awrboo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f69awrboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:rewind-hexagon-solid"} {...others} />);
}

export default Component;
