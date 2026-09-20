import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqk-0y0et.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aqk-0y0et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:camera-flip"} {...others} />);
}

export default Component;
