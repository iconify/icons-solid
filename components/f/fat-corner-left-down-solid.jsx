import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke7b5obcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ke7b5obcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:fat-corner-left-down-solid"} {...others} />);
}

export default Component;
