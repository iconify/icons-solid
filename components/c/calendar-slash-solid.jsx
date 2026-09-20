import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypw2v6byn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ypw2v6byn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:calendar-slash-solid"} {...others} />);
}

export default Component;
