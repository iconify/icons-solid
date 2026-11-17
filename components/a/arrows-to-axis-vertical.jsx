import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnn1p_bvo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hnn1p_bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrows-to-axis-vertical"} {...others} />);
}

export default Component;
