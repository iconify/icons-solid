import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at68bwbkh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="at68bwbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:guitar-acoustic"} {...others} />);
}

export default Component;
