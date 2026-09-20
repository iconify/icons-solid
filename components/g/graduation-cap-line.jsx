import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqlr_ebwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tqlr_ebwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:graduation-cap-line"} {...others} />);
}

export default Component;
