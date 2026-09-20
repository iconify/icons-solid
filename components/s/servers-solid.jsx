import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6c_8lp1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h6c_8lp1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:servers-solid"} {...others} />);
}

export default Component;
