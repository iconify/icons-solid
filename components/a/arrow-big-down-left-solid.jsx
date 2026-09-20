import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjqu0sf-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rjqu0sf-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-big-down-left-solid"} {...others} />);
}

export default Component;
