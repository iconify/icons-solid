import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xysgi34gs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xysgi34gs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:roman-numeral-6"} {...others} />);
}

export default Component;
