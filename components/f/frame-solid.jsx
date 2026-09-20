import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mak4hx3pt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mak4hx3pt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:frame-solid"} {...others} />);
}

export default Component;
