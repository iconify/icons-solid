import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvmsos8ll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vvmsos8ll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:dice-2-outline"} {...others} />);
}

export default Component;
