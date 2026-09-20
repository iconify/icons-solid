import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr6iflb-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zr6iflb-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:ev-charger-type1"} {...others} />);
}

export default Component;
