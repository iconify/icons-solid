import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_-22ibss.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t_-22ibss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:tasks-all"} {...others} />);
}

export default Component;
