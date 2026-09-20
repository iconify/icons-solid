import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbc_w3bzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wbc_w3bzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:drag-move-line"} {...others} />);
}

export default Component;
