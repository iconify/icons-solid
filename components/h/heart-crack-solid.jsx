import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/en4s_dyhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="en4s_dyhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:heart-crack-solid"} {...others} />);
}

export default Component;
