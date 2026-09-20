import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tjxv-8b0c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tjxv-8b0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-ipad-minus"} {...others} />);
}

export default Component;
