import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbtry84gz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xbtry84gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:heart-pulse-alert"} {...others} />);
}

export default Component;
