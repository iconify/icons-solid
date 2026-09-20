import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/een_dgbbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="een_dgbbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:arrow-big-down-solid"} {...others} />);
}

export default Component;
