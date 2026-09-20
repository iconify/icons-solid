import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sxh8pobme.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sxh8pobme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-text-rotation-down-vertical"} {...others} />);
}

export default Component;
