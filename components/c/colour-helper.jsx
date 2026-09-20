import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4ujxob5s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4ujxob5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:colour-helper"} {...others} />);
}

export default Component;
