import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojc1q_ioi.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ojc1q_ioi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:shell-window-maximize-outline"} {...others} />);
}

export default Component;
