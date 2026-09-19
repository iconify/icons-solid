import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvwej7una.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mvwej7una"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:quote-right-alt"} {...others} />);
}

export default Component;
