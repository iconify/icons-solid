import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi2p6dbph.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vi2p6dbph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:color-filter-ai-line"} {...others} />);
}

export default Component;
