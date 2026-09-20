import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygj9995gz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ygj9995gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:award-trophy-1"} {...others} />);
}

export default Component;
