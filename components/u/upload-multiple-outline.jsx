import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jz1_7bcny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jz1_7bcny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:upload-multiple-outline"} {...others} />);
}

export default Component;
