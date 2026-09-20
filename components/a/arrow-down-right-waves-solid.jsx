import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1ooo089j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x1ooo089j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-down-right-waves-solid"} {...others} />);
}

export default Component;
