import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy9p3gbal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gy9p3gbal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:butterfly"} {...others} />);
}

export default Component;
