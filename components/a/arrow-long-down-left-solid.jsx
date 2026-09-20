import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trphc0u7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="trphc0u7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-long-down-left-solid"} {...others} />);
}

export default Component;
